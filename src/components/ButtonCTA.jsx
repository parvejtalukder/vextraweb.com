import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';

const ButtonCTA = () => {
    return (
        <Button3D type="success" onPress={() => console.log('Clicked!')}>
          WhatsApp
        </Button3D>
    );
};

export default ButtonCTA;