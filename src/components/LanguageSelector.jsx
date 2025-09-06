import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-4 right-4">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="p-2 border rounded"
      >
        <option value="bn">বাংলা</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
