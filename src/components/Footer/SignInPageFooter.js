import "./Footer.scss";
import { useContext } from "react";
import { LangContext } from "../../redux/language/languageContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const SignInPageFooter = () => {
  const { language } = useContext(LangContext);
  console.log(language);
  return (
    <>
      <div className="signInFooterWrapper">
        <div className="footerWrapper">
          <div className="footerHeader">
            {language === "EN"
              ? "Questions? Call 0800-022-9547-900"
              : "Vragen? Bel 0800-022-9547-900"}
          </div>

          <div className="footerLinkWrapper">
            <span className="footerFakeLink">
              {language === "EN" ? "FAQ" : "Veelgestelde vragen"}
            </span>
            <span className="footerFakeLink">
              {language === "EN" ? "Help centre" : "Helpcentrum"}
            </span>
            <span className="footerFakeLink">
              {language === "EN" ? "Terms of use" : "Gebruiksvoorwaarden"}
            </span>
            <span className="footerFakeLink">
              {language === "EN" ? "Privacy" : "Privacy"}
            </span>
            <span className="footerFakeLink">
              {language === "EN" ? "Cookie Preferences" : "Cookie voorkeuren"}
            </span>
            <span className="footerFakeLink">
              {language === "EN" ? "Corporate information" : "Bedrijfsgegevens"}
            </span>

            <span className="footerFakeLink"></span>
            <span className="footerFakeLink"></span>
          </div>

          <div className="selectorContainer">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPageFooter;
