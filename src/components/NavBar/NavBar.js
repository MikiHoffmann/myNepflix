import "./NavBar.scss"
import { Link, NavLink } from "react-router-dom"
import { NepflixLogo } from "../Logos/NepflixLogo"
import { useContext } from "react"
import { LangContext } from "../../redux/language/languageContext"
import { useState } from "react"
import { useLocation } from "react-router-dom"
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
  const location = useLocation()
  const { pathname } = location
  const splitPathname = pathname.split("/")

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
            <NavLink to="/home" className={splitPathname[1] === "home" ? "activeLink" : ""}>
              <span>{language === "EN" ? "Homepage" : "Homepagina"}</span>
            </NavLink>
            <NavLink to="/movies" className={splitPathname[1] === "movies" ? "activeLink" : ""}>
              <span>{language === "EN" ? "Movies" : "Films"}</span>
            </NavLink>
            <NavLink to="/series" className={splitPathname[1] === "series" ? "activeLink" : ""}>
              <span>Series</span>
            </NavLink>
            <NavLink to="/mylist" className={splitPathname[1] === "mylist" ? "activeLink" : ""}>
              <span>{language === "EN" ? "My list" : "Mijn lijst"}</span>
            </NavLink>
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
