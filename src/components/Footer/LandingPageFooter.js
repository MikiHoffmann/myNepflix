import "./Footer.scss"
import { useContext } from "react"

import { LangContext } from "../../redux/language/languageContext"
import LanguageSelector from "../LanguageSelector/LanguageSelector"

const LandingPageFooter = () => {
  const { language } = useContext(LangContext)
  return (
    <>
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
            {language === "EN" ? "Account" : "Account"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Media centre" : "Mediacentrum"}
          </span>
          <span className="footerFakeLink">
            {language === "EN"
              ? "Investor Relations"
              : "Relaties met investeerders"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Jobs" : "Vacatures"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Redeem Gift Cards" : "Cadeaubonnen gebruiken"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Buy Gift Cards" : "Cadeaubonnen kopen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Ways to watch" : "Hoe kun je Nepflix kijken?"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Terms of use" : "Gebruiksvoorwaarden"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Privacy" : "Privacy"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Cookie Preferences" : "Cookievoorkeuren"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Corporate information" : "Bedrijfsgegevens"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Contact Us" : "Contact opnemen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Speed Test" : "Snelheidstest"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Legal Notices" : "Wettelijke bepalingen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Only on Nepflix" : "Alleen op Nepflix"}
          </span>
          <span className="footerFakeLink"></span>
        </div>

        <div className="selectorContainer">
          <LanguageSelector />
        </div>

        <div className="footerBottom">
          <span>
            {language === "EN" ? "Nepflix Netherlands" : "Nepflix Nederland"} by
            Miki
          </span>
          <a href="https://www.miki101.nl" rel="noreferrer" target="_blank">
            www.miki101.nl
          </a>
        </div>
      </div>
    </>
  )
}
export default LandingPageFooter
