import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations('piska');
  return (
    <main>
        <h1>{t('h2')}</h1>
    </main>
  );
}
