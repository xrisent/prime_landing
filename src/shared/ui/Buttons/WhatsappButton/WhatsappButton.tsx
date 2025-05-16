import Image from "next/image";
import "./WhatsappButton.scss";
import { TelegramButtonProps } from "@/shared/types/types";

export const WhatsappButton: React.FC<TelegramButtonProps> = ({
  text,
  onClick,
  size = "small",
}) => {
  return (
    <button
      className={`WhatsappButton ${size}`}
      onClick={onClick}
    >
        <Image width={30} height={30} src={'/assets/icons/Whatsapp.svg'} alt="Whatsapp button"/>
      {text}
    </button>
  );
};
