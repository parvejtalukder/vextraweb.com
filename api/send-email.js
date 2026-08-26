/* global process */
/**
 * Vercel serverless function that sends an email with Resend.
 *
 * Reads the Resend secret key from `process.env.RESEND_API` (set in .env
 * for local dev, and as an environment variable on Vercel). The key never
 * touches the browser — the frontend only POSTs the form details here.
 *
 * Deployment note: files inside the `/api` folder are auto-deployed as
 * serverless functions by Vercel.
 */
export default async function handler(req, res) {
  // Only allow POST.
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "Resend API key is not configured (RESEND_API)." });
  }

  const {
    to = process.env.MAIL_TO || "mail.vextraweb@gmail.com",
    from = process.env.MAIL_FROM || "VextraWeb <onboarding@resend.dev>",
    replyTo,
    subject,
    text,
  } = req.body || {};

  if (!subject || !text) {
    return res
      .status(400)
      .json({ error: "Missing required fields: subject and text." });
  }

  const payload = {
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    text,
  };
  if (replyTo) payload.reply_to = replyTo;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend error:", data);
      return res
        .status(response.status)
        .json({ error: data.message || "Failed to send email." });
    }

    return res.status(200).json({ ok: true, id: data.id });
  } catch (err) {
    console.error("Resend request failed:", err);
    return res.status(500).json({ error: "Could not send email." });
  }
}