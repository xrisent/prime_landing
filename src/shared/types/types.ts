export interface ButtonProps {
    text: string | boolean;
    onClick?: () => void;
    variant?: 'request' | 'number' | 'corner';
    size?: 'requestSize' | 'requestSize' | 'cornerSize';
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
  
export interface WorkItemProps {
    imgSrc: string
    imgAlt?: string
    imgWidth: number
    imgHeight: number
    title: string
    text: string
}