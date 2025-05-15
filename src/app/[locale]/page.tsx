import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('piska');
  return (
    <main className={styles.main}>
        <h1>{t('h1')}</h1>
    </main>
  );
}
