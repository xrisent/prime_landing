export interface ButtonProps {
    text: string | boolean;
    onClick?: () => void;
    variant?: 'request' | '' | '';
    size?: 'requestSize' | 'Size' | 'Size';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface PropsMenu {
    isOpen: boolean;
    onClose: () => void;
}