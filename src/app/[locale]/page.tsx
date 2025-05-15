import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { WorkUs } from "@/features/WorkUs/WorkUs";
import { Questions } from "@/features/Questions/Questions";
import { Business } from "@/features/Business/Business";

export default function Home() {
  return (
    <main className={styles.main}>
        <WorkUs/>
        <Business/>
        <Questions/>
    </main>
  );
}
