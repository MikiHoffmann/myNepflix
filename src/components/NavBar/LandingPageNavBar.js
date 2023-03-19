import "./LandingPageNavBar.scss"
import { NepflixLogo } from "../../components/Logos/NepflixLogo"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import ButtonRed from "../ButtonRed/ButtonRed"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { LangContext } from "../../redux/language/languageContext"
const LandingPageNavBar = () => {
  const { language } = useContext(LangContext)
  //console.log(language);

  return (
    <>
      <div className="navBarWrapper">
        <NepflixLogo />
        <div className="buttonContainer">
          <LanguageSelector />
          <Link to="/signin">
            <ButtonRed>{language === "EN" ? "Sign In" : "Inloggen"}</ButtonRed>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LandingPageNavBar
