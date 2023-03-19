import "./SearchBar.scss"
import { IconSearch } from "../Icons/IconSearch"
import { useState } from "react"

const SearchBar = () => {
  const [searchToggle, setSearchToggle] = useState(false)
  const startSearchInput = () => {
    setSearchToggle(!searchToggle)
  }
  return (
    <>
      <div className="searchBar">
        <div
          className={`searchBarInputClose ${
            searchToggle && " searchBarInputActive"
          }`}
          onClick={startSearchInput}
        >
          <span className="searchIcon">
            <IconSearch />
          </span>
        </div>
      </div>
    </>
  )
}

export default SearchBar
