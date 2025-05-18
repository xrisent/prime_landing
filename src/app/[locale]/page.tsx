import styles from "./page.module.scss";
import { WorkUs } from "@/features/WorkUs/WorkUs";
import { Questions } from "@/features/Questions/Questions";
import { Business } from "@/features/Business/Business";
import { Hero } from "@/features/Hero/Hero";
import { Way } from "@/features/Way/Way";
import { Review } from "@/features/Swiper/Review";


export default function Home() {
  return (
    <main className={styles.main}>
        <Hero />
        <WorkUs/>
        <Way/>
        <Business/>
        <Questions/>
        <Review/>
    </main>
  );
}
