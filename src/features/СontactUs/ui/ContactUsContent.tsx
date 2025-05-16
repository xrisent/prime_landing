import Image from "next/image";
import styles from "../ContactUs.module.scss";
import { ContactUsContentProps } from "../types/types";
import { ContactUsSvg } from "./ContactUsSvg";

export const ContactUsContent: React.FC<ContactUsContentProps> = ({
  officeAddress,
  officeAddressText1,
  officeAddressText2,
  workingHours,
  workingHoursText1,
  workingHoursText1Line1,
  workingHoursText1Line2,
  workingHoursText2,
  workingHoursText2Line1,
  workingHoursText2Line2,
  contactUs,
}) => {
  return (
    <div className={styles.contactUs__box__content}>
      <Image
        src="/assets/icons/Logo.svg"
        className={`${styles.Logo}`}
        alt="Logo"
        width={200}
        height={82}
      />
      <ul className={styles.contactUs__box__contentUl}>
        <li>
          <h5>{officeAddress}</h5>
          <p>{officeAddressText1}</p>
          <p>{officeAddressText2}</p>
        </li>
        <li>
          <h5>{workingHours}</h5>

          {workingHoursText1 ? (
            <p>{workingHoursText1}</p>
          ) : (
            <>
              <p>{workingHoursText1Line1}</p>
              <p>{workingHoursText1Line2}</p>
            </>
          )}

          {workingHoursText2 ? (
            <p>{workingHoursText2}</p>
          ) : (
            <>
              <p>{workingHoursText2Line1}</p>
              <p>{workingHoursText2Line2}</p>
            </>
          )}
        </li>
        <li>
          <h5>{contactUs}</h5>
          <p>
            <Image
              src={"/assets/icons/EmailFooter.svg"}
              alt="email icon"
              width={40}
              height={40}
            />
            info.xyz@gmail.com
          </p>
          <p>
            <Image
              src={"/assets/icons/PhoneFooter.svg"}
              alt="phone icon"
              width={40}
              height={40}
            />
            +996 504 476-924
          </p>
        </li>
      </ul>
      <ContactUsSvg/>
    </div>
  );
};
