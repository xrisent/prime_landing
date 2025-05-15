import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { Hero } from "@/features/Hero/Hero";

export default function Home() {
  return (
    <main>
        <Hero/>
    </main>
  );
}
