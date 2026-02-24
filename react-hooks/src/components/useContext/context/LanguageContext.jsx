import { createContext, useReducer } from "react";
import { LanguageReducer } from "./LanguageReducer";

export const LanguageContext = createContext();

const initialState = {
  language: "en"
};

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);

  return (
    <LanguageContext.Provider value={{ language: state.language, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
