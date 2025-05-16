"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./FormHero.scss";
import { FormHeroProps } from "./types/types";
import { useTranslations } from "next-intl";

export const FormHero: React.FC<FormHeroProps> = ({
  pText,
  name: initialName,
  email: initialEmail,
  number: initialNumber,
  message: initialMessage,
}) => {
  const t = useTranslations("FormHero");
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState<string | undefined>(initialNumber);
  const [message, setMessage] = useState(initialMessage);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className='formHero' onSubmit={handleSubmit}>
      <p className='formHero__description'>{pText}</p>

      <div className='formHero__formGroup'>
        <input
          type="text"
          id="name"
          placeholder={t("name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='formHero__formGroup'>
        <input
          type="email"
          id="email"
          placeholder={t("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='formHero__formGroup'>
        <PhoneInput
          international
          //   defaultCountry="KG"
          value={phone}
          onChange={setPhone}
          placeholder={t("number")}
        />
      </div>

      <div className='formHero__formGroup'>
        <textarea
          id="message"
          value={message}
          placeholder={t("message")}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>

      <button type="submit" className='formHero__button'>
        {t("send")}
      </button>
    </form>
  );
};
