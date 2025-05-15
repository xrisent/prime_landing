export interface ButtonProps {
    text: string | boolean;
    onClick?: () => void;
    variant?: 'request' | 'number' | '';
    size?: 'requestSize' | 'requestSize' | 'Size';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface PropsMenu {
    isOpen: boolean;
    onClose: () => void;
}

export interface TelegramButtonProps{
    text: string | boolean;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
}