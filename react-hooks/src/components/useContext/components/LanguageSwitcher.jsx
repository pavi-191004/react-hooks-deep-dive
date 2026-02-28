import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { LANG_CHANGE } from "../context/actionType";

export const LanguageSwitcher = () => {
  const { dispatch } = useContext(LanguageContext) ?? {};

  const handleLanguageChange = (lang) => {
    dispatch?.({ type: LANG_CHANGE, payload: lang });
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button>

      <button onClick={() => handleLanguageChange("ta")}>Tamil</button>
    </div>
  );
};
