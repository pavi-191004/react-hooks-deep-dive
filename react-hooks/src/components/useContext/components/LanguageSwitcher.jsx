import  { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { LANG_CHANGE } from "../context/actionType";
export const LanguageSwitcher = () => {
  const { dispatch } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => dispatch({ type:LANG_CHANGE, payload: "en" })}>
        English
      </button>

      <button onClick={() => dispatch({ type: LANG_CHANGE, payload: "ta" })}>
        Tamil
      </button>
    </div>
  );
};
