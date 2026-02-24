import  { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export const MultilingualForm = () => {
  const { language } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        name="userName"
        value={formData.userName}
        placeholder={translations[language].username}
        onChange={handleOnChange}
      />

      <input
        name="email"
        value={formData.email}
        placeholder={translations[language].email}
        onChange={handleOnChange}
      />

      <input
        name="password"
        value={formData.password}
        placeholder={translations[language].password}
        onChange={handleOnChange}
      />

      <button type="submit">
        {translations[language].submit}
      </button>
    </form>
  );
};
