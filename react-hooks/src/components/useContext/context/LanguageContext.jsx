import { createContext, useReducer } from "react";
import { LanguageReducer } from "./LanguageReducer";

export const LanguageContext = createContext(null);

const initialState = {
  language: "en",
};

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);

  return (
    <LanguageContext.Provider
      value={{
        language: state?.language ?? "en",
        dispatch,
      }}
    >
      {children ?? null}
    </LanguageContext.Provider>
  );
};
