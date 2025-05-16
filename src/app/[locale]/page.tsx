import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { WorkUs } from "@/features/WorkUs/WorkUs";
import { Hero } from "@/features/Hero/Hero";
import { Map } from "@/features/Map/Map";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <WorkUs />
      <Map />
    </main>
  );
}
