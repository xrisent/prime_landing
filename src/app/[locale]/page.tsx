import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { WorkUs } from "@/features/WorkUs/WorkUs";

export default function Home() {
  return (
    <main className={styles.main}>
        <WorkUs/>
    </main>
  );
}
