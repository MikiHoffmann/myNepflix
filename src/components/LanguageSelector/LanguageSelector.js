import "./LanguageSelector.scss";
import { IconWorld } from "../Icons/IconWorld";
import { LangContext } from "../../redux/language/languageContext";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { changeLanguage } from "../../redux/language/language.actions";

const LanguageSelector = () => {
  const currentLanguage = useSelector((state) => state.language);
  //console.log("currentLanguage: ", currentLanguage);
  const dispatch = useDispatch();
  const { language, setLanguage } = useContext(LangContext);
  const languages = [
    { code: "EN", name: "English" },
    { code: "NL", name: "Nederlands" },
  ];

  const languageOptions = languages.map((language) => {
    return <option key={language.code} value={language.code}>{language.name}</option>;
  });

  useEffect(() => {
    dispatch(changeLanguage(language))
  },[language,dispatch])

  return (
    <>
      <div className="selectContainer">
        <IconWorld />
        <select
          className="customSelect"
          placeholder={currentLanguage}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languageOptions}
        </select>
      </div>
    </>
  );
};

export default LanguageSelector;
