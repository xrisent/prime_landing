import styles from "../../Hero.module.scss";
import { HeroTextProps } from "../../types/types";

export const HeroText: React.FC<HeroTextProps> = ({ h1Text, pText }) => {
  return (
    <div className={styles.heroLeft__text}>
      <h1>{h1Text}</h1>
      <p>{pText}</p>
    </div>
  );
};
