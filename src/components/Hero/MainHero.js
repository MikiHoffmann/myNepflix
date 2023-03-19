import "./MainHero.scss"
import "../Buttons/ButtonStyle.scss"
import { IconPlayBlack } from "../Icons/IconPlayBlack"
import { IconInfo } from "../Icons/IconInfo"
import { useContext } from "react"
import { LangContext } from "../../redux/language/languageContext"
import { ButtonRoundDark } from "../ButtonRound/ButtonRound"
import { IconVolumeUp } from "../Icons/IconVolumeUp"
import { IconKijkWijzer16 } from "../Icons/IconKijkWijzer16"
//import InfoModal from "../InfoModal/InfoModal"
import { toggleModal } from "../../redux/modal/modal.actions"
import { useDispatch, useSelector } from "react-redux"

const HomePageHero = ({ Video, HeroTitle }) => {
  const { language } = useContext(LangContext)
  const modalHidden = useSelector((state) => state.modal.modalContainer)
  const dispatch = useDispatch()
  return (
    <>
      <div className="heroContainer">
        <div className="heroTitleContainer">
          <img src={HeroTitle} alt={HeroTitle} />
        </div>
        <div className="heroButtonContainer">
          <button className="buttonLong buttonLongWhite">
            <IconPlayBlack />
            <span>{language === "EN" ? "play" : "afspelen"}</span>
          </button>
          <button
            className="buttonLong buttonLongTrans"
            onClick={() => dispatch(toggleModal(!modalHidden))}
          >
            <IconInfo />
            <span>
              {language === "EN" ? "more information" : "meer informatie"}
            </span>
          </button>
          <div className="heroInfoContainer">
            <ButtonRoundDark>
              <IconVolumeUp />
            </ButtonRoundDark>
            <div className="heroAgeContainer">
              <IconKijkWijzer16 />
            </div>
          </div>
        </div>
        <div className="heroToBackgroundTransition"></div>
        <video src={`${Video}`} autoPlay loop muted></video>
      </div>

    </>
  )
}

export default HomePageHero
