import { useTranslations } from "next-intl";
import styles from "./Hero.module.scss";
import { HeroText } from "./ui/HeroText/HeroText";
import { TelegramButton } from "@/shared/ui/Buttons/TelegramButton/TelegramButton";
import { WhatsappButton } from "@/shared/ui/Buttons/WhatsappButton/WhatsappButton";
import { Achievements } from "./ui/Achievements/Achievements";
import { FormHero } from "@/widgets/formHero/FormHero";

export const Hero: React.FC = () => {
  const t = useTranslations("Hero");

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.containerHero}`}>
        <div className={styles.hero__box}>
          <div className={styles.heroLeft}>
            <HeroText h1Text={t("h1")} pText={t("p")} />
            <div className={styles.buttons}>
              <TelegramButton size="medium" text={t("telegram")} />
              <WhatsappButton size="medium" text={t("whatsapp")} />
            </div>
            <Achievements
              li1First={t("li1First")}
              li1Second={t("li1Second")}
              li2First={t("li2First")}
              li2Second={t("li2Second")}
              li3First={t("li3First")}
              li3Second={t("li3Second")}
            />
          </div>
          <div className={styles.heroRight}>
            <FormHero
              pText={t("formDescription")}
              name=""
              email=""
              number=""
              message=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
