import styles from "./Achievements.module.scss";
import { AchievementsProps } from "@/shared/types/types";

export const Achievements: React.FC<AchievementsProps> = ({
  li1First,
  li1Second,
  li2First,
  li2Second,
  li3First,
  li3Second,
}) => {
  const items = [
    { first: li1First, second: li1Second },
    { first: li2First, second: li2Second },
    { first: li3First, second: li3Second }
  ];

  return (
    <ul className={styles.achievements}>
      {items.map((el, idx) => (
        <li key={idx}>
          <strong>{el.first}</strong>
          <br />
          {el.second}
        </li>
      ))}
    </ul>
  );
};