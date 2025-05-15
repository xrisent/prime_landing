import styles from "../../Hero.module.scss";
import { AchievementsProps } from "../../types/types";

export const Achievements: React.FC<AchievementsProps> = ({
  li1First,
  li1Second,
  li2First,
  li2Second,
  li3First,
  li3Second,
}) => {
  return (
    <ul className={styles.achievements}>
      <li>
        <strong>{li1First}</strong>
        <br />
        {li1Second}
      </li>
      <li>
        <strong>{li2First}</strong>
        <br />
        {li2Second}
      </li>
      <li>
        {li3First}
        <br />
        {li3Second}
      </li>
    </ul>
  );
};
