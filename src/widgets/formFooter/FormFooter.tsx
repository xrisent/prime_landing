"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./FormFooter.scss";
import { FormHeroProps } from "@/shared/types/types";
import { useTranslations } from "next-intl";

export const FormFooter: React.FC<FormHeroProps> = ({
  pText,
  name: initialName,
  email: initialEmail,
  number: initialNumber,
  message: initialMessage,
  className,
}) => {
  const t = useTranslations("FormFooter");
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState<string | undefined>(initialNumber);
  const [message, setMessage] = useState(initialMessage);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={`formFooter ${className}`} onSubmit={handleSubmit}>
      <h3 className='formFooter__description'>{pText}</h3>

      <div className='formFooter__formGroup'>
        <input
          type="text"
          id="name"
          placeholder={t("name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='formFooter__formGroup'>
        <input
          type="email"
          id="email"
          placeholder={t("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='formFooter__formGroup'>
        <PhoneInput
          international
          value={phone}
          onChange={setPhone}
          placeholder={t("number")}
        />
      </div>

      <div className='formFooter__formGroup textareaFormGroup'>
        <textarea
          id="message"
          value={message}
          placeholder={t("message")}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>

      <button type="submit" className='formFooter__button'>
        {t("send")}
      </button>
    </form>
  );
};