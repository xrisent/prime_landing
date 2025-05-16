import Image from "next/image";
import "./TelegramButton.scss";
import { TelegramButtonProps } from "@/shared/types/types";

export const TelegramButton: React.FC<TelegramButtonProps> = ({
  text,
  onClick,
  size = "small",
}) => {
  return (
    <button
      className={`TelegramButton ${size}`}
      onClick={onClick}
    >
        <Image width={30} height={30} src={'/assets/icons/Telegram.svg'} alt="Telegram button"/>
      {text}
    </button>
  );
};
