export interface FormHeroProps {
  pText: string;
  name: string;
  email: string;
  number?: string; // Просто string, не усложняем
  message: string;
  className?: string;
}