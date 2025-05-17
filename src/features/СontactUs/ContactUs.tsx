import { useTranslations, useMessages } from "next-intl";
import styles from "./ContactUs.module.scss";
import { ContactUsContent } from "./ui/ContactUsContent";
import { FormHero } from "@/widgets/formHero/FormHero";

export const ContactUs: React.FC<{}> = () => {
  const t = useTranslations("ContactUsFooter");
  const messages = useMessages();

  const hasSplitWorkingHours1 =
    messages?.ContactUsFooter?.workingHoursText1Line1 !== undefined;
  const hasSplitWorkingHours2 =
    messages?.ContactUsFooter?.workingHoursText2Line1 !== undefined;

  return (
    <section className={styles.contactUs}>
      <div className={`container ${styles.contactUsContainer}`}>
        <div className={styles.contactUs__box}>
          <div className={styles.contactUs__boxLeft}>
            <ContactUsContent
              officeAddress={t("officeAddress")}
              officeAddressText1={t("officeAddressText1")}
              officeAddressText2={t("officeAddressText2")}
              workingHours={t("workingHours")}
              workingHoursText1={t('workingHoursText1')}
              workingHoursText2={t('workingHoursText2')}
              contactUs={t("contactUs")}
            />
          </div>
          <div className={styles.contactUs__boxRight}>
            <FormHero
              pText={t("formDescription")}
              name=""
              email=""
              number=""
              message=""
              className={styles.formContactUs}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
