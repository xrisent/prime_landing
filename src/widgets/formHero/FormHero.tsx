"use client";
import { useState, useCallback, memo } from "react";
import dynamic from "next/dynamic";
import "react-phone-number-input/style.css";
import "./FormHero.scss";
import { FormHeroProps } from "@/shared/types/types";
import { useTranslations } from "next-intl";

const PhoneInput = dynamic(
  () => import("react-phone-number-input").then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => <input type="tel" placeholder="Loading phone input..." />
  }
);

export const FormHero: React.FC<FormHeroProps> = memo(function FormHero({
  pText,
  name: initialName,
  email: initialEmail,
  number: initialNumber,
  message: initialMessage,
  className,
}) {
  const t = useTranslations("FormHero");
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState<string | undefined>(initialNumber);
  const [message, setMessage] = useState(initialMessage);

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePhoneChange = useCallback((value?: string) => {
    setPhone(value);
  }, []);

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Логика  формы
  }, []);

  return (
    <form id="heroForm" className={`formHero ${className}`} onSubmit={handleSubmit}>
      <p className='formHero__description'>{pText}</p>

      <div className='formHero__formGroup'>
        <input
          type="text"
          id="name"
          placeholder={t("name")}
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className='formHero__formGroup'>
        <input
          type="email"
          id="email"
          placeholder={t("email")}
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div className='formHero__formGroup'>
        <PhoneInput
          international
          value={phone}
          onChange={handlePhoneChange}
          placeholder={t("number")}
        />
      </div>

      <div className='formHero__formGroup textareaFormGroup'>
        <textarea
          id="message"
          value={message}
          placeholder={t("message")}
          onChange={handleMessageChange}
          rows={4}
        />
      </div>

      <button type="submit" className='formHero__button'>
        {t("send")}
      </button>
    </form>
  );
});