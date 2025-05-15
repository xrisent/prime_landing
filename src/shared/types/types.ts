export interface ButtonProps {
    text: string | boolean;
    onClick?: () => void;
    variant?: 'request' | 'number' | 'corner' | 'start';
    size?: 'requestSize' | 'requestSize' | 'cornerSize' | 'startSize';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface PropsMenu {
    isOpen: boolean;
    onClose: () => void;
}

export interface WorkItemProps {
    imgSrc: string
    imgAlt?: string
    imgWidth: number
    imgHeight: number
    title: string
    text: string
}

export interface QuestionsItemProps {
    question: string
    answer: string
}

export interface BusinessCardProps {
    title: string
    price: string
    check1: string
    check2: string
    check3: string
    check4: string
}