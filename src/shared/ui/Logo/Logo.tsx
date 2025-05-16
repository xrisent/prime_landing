import { LogoProps } from "@/shared/types/types";
import Image from "next/image";
import styles from './Logo.module.scss'
import mobile from './LogoMobile.module.scss'

export const Logo: React.FC<LogoProps> = ({onClick}) => {
  return (
    <Image
      src="/assets/icons/Logo.svg"
      onClick={onClick}
      className={`${styles.header__logo} ${mobile.header__logo}`}
      alt="Header Logo"
      width={204}
      height={82}
    />
  );
};
