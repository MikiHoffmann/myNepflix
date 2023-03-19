import "./Footer.scss"
import { useContext } from "react"
import { LangContext } from "../../redux/language/languageContext"
import { IconFacebook } from "../Icons/IconFacebook"
import { IconInstagram } from "../Icons/IconInstagram"
import { IconTwitter } from "../Icons/IconTwitter"
import { IconYoutube } from "../Icons/IconYoutube"

const MainFooter = () => {
  const { language } = useContext(LangContext)
  return (
    <>
      <div className="footerWrapper">
        <div className="footerHeader">
          <IconFacebook />
          <IconInstagram />
          <IconTwitter />
          <IconYoutube />
        </div>
        <div className="footerLinkWrapper">
          <span className="footerFakeLink">
            {language === "EN" ? "Audioscription" : "Audioscriptie"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Help centre" : "Helpcentrum"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Gift Cards" : "Cadeaubonnen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Media centre" : "Mediacentrum"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Relations with investors" : "Relaties met investeerders"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Jobs" : "Vacatures"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Terms of use" : "Gebruiksvoorwaarden"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Privacy" : "Privacy"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Legal notices" : "Wettelijke bepalingen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Cookie Preferences" : "Cookievoorkeuren"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Corporate information" : "Bedrijfsgegevens"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Contact" : "Contact opnemen"}
          </span>
        </div>
      </div>
    </>
  )
}

export default MainFooter
