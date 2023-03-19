import "./NavBar.scss"
import { Link } from "react-router-dom"
import { NepflixLogo } from "../Logos/NepflixLogo"
import { useContext } from "react"
import { LangContext } from "../../redux/language/languageContext"
import { useState } from "react"
import SearchBar from "./SearchBar"
import { IconNotification } from "../Icons/IconNotification"
import { NepflixProfileImg } from "../Icons/Nepflix-profile-img"
import { IconCaretDown } from "../Icons/IconCaretDown"
import { IconPencil } from "../Icons/IconPencil"
import { IconAccount } from "../Icons/IconAccount"

const NavBar = () => {
  const { language } = useContext(LangContext)
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = 0)
  }

  return (
    <>
      <div
        className={
          isScrolled ? "navBarContainer isScrolled" : "navBarContainer"
        }
      >
        <Link to="/">
          <NepflixLogo />
        </Link>
        <div className="navBarLinkContainer">
          <div className="pageLinkContainer">
            <Link to="/home">
              <span>{language === "EN" ? "Homepage" : "Homepagina"}</span>
            </Link>
            <Link to="/movies">
              <span>{language === "EN" ? "Movies" : "Films"}</span>
            </Link>
            <Link to="/series">
              <span>Series</span>
            </Link>
            <Link to="/mylist">
              <span>{language === "EN" ? "My list" : "Mijn lijst"}</span>
            </Link>
          </div>
          <div className="menuContainer">
            <SearchBar />
            <IconNotification />
            <div className="dropDownMenu">
              <span className="nepflixProfileImgContainer">
                <NepflixProfileImg />
              </span>
              <span className="dropDownMenuArrow">
                <IconCaretDown />
              </span>
              <div className="dropDown">
                <span className="dropDownItem">
                  <IconPencil />
                  <span>
                    {language === "EN"
                      ? "Manage profiles"
                      : "Profielen beheren"}
                  </span>
                </span>
                <span className="dropDownItem">
                  <IconAccount />
                  Account
                </span>
                <span className="dropDownItem">
                  <Link to="/">
                    <span>{language === "EN" ? "sign out" : "uitloggen"}</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NavBar
