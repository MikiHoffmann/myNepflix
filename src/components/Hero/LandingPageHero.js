import "./LandingPageHero.scss"
import HeroImage from "../../assets/images/landing-bg.jpg"
import { IconArrowRight } from "../Icons/IconArrowRight"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { LangContext } from "../../redux/language/languageContext"

const LandingPageHero = () => {
  const { language } = useContext(LangContext)
  return (
    <>
      <div className="heroWrapper">
        <div
          className="heroImage"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>
        <div className="heroBanner">
          <h1 className="heroTitle">
            {language === "EN"
              ? "Unlimited films, TV programmes and more."
              : "Onbeperkt series, films en meer kijken."}
          </h1>
          <h2 className="heroSubTitle">
            {language === "EN"
              ? "Watch anywhere. Cancel any time."
              : "Kijk overal. Cancel op elk moment."}
          </h2>
          <form className="emailForm">
            <h3 className="emailFormTitle">
              {language === "EN"
                ? "Ready to watch? Enter your email to create or restart your membership."
                : "Klaar om te kijken? Vul je email in en creëer of herstart je lidmaatschap."}
            </h3>
            <input
              className="emailInput"
              placeholder={language === "EN" ? "Email address" : "Email adres"}
            />
            <Link to="/">
              <button className="startButton">
                {language === "EN" ? "Get started" : "Start nu"}
                <IconArrowRight />
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default LandingPageHero
