import React, { useState, useRef, Dispatch, SetStateAction } from 'react'
import redditLogo from '../icons/reddit.svg';
import sidebarIcon from '../icons/sidebar.svg';
import searchLogo from '../icons/search.svg';
import crossIcon from '../icons/cross.svg';
import messageIcon from '../icons/message.svg';
import plusIcon from '../icons/plus.svg';
import bellIcon from '../icons/bell.svg';
import profileIcon from '../icons/profile.png';
import '../input.css'
import RoundedButton from './round-button'

interface HeaderProps {
  // setSideBar: (prev: boolean) => boolean;
  setSideBar: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  setSideBar
}) => {
  const [clearIconVisibility, setClearIconVisibility] = useState(false);
  const [createButtonHovered, setCreateButtonHovered] = useState(false);
  const [searchBarFocused, setSearchBarFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchInput = () => {
    if (searchInputRef.current == null || searchInputRef.current.value == null || searchInputRef.current.value === "")
      setClearIconVisibility(false)
    else
      setClearIconVisibility(true)
  }

  const handleClearButton = () => {
    if (searchInputRef.current != null) {
      searchInputRef.current.value = "";
      setClearIconVisibility(false);
    }
  }

  return (
    <header>
      <div className="flex ml-4 mr-4 mt-2 pb-2 border-2 border-solid border-t-0 border-l-0 border-r-0 border-b-black-500">
        <div className="flex gap-xs pr-lg items-center justify-start pr-6">
          <RoundedButton imageSrc={sidebarIcon} buttonWidth={"w-10"} buttonHeight={"h-10"} minImageHeight={"min-h-5"} minImageWidth={"min-w-5"}
            imageWidth={"w-5"} imageHeight={"w-5"} onClickAction={() => setSideBar((prev: boolean) => !prev)} />
          <a href="/" id="reddit-logo" className="no-underline flex items-center">
            <div className="p-1.5 rounded-full content-center justify-center flex">
              <img src={redditLogo} alt="image not found" className="min-w-10 min-h-10 " />
            </div>
          </a>
        </div>

        <div className="s:col-start-4 s:col-span-6 m:col-span-7 l:col-span-9 xl:col-start-5 w-full py-xs h-15 l:flex l:justify-center pr-6 min-w-52">
          <form autoComplete="off" className="flex relative items-center justify-center w-full h-full">
            <label className={`${!searchBarFocused ? "bg-slate-200" : "shadow-[rgba(0,0,15,0.5)_0px_0px_4px_0px]"} text-left flex-1 w-full h-full flex items-center justify-left px-4 rounded-full`}>
              <div className="pr-2">
                <img src={searchLogo} alt="image not found" className="w-6 h-6" />
              </div>
              <input type="text" ref={searchInputRef} name="search-bar" placeholder="Search Reddit" autoComplete="off" className="bg-transparent w-full focus:outline-none"
                spellCheck="false" onChange={handleSearchInput} onFocus={() => setSearchBarFocused(true)} onBlur={() => setSearchBarFocused(false)} />
              {clearIconVisibility &&
                <RoundedButton imageSrc={crossIcon} buttonWidth={"w-6"} buttonHeight={"h-6"} minImageHeight={"min-height-3"} minImageWidth={"min-width-3"} imageWidth={"w-3"} imageHeight={"w-3"} onClickAction={handleClearButton} />
              }
            </label>
          </form>
        </div>

        <div className="flex gap-xs pr-lg items-center justify-start">
          <div className="mx-1">
            <RoundedButton padding={"p-0"} imageSrc={messageIcon} buttonWidth={"w-10"} buttonHeight={"h-10"} minImageHeight={"min-height-10"} minImageWidth={"min-width-10"} imageWidth={"w-10"} imageHeight={"w-10"} />
          </div>
          <div className={`p-2.5 rounded-full content-center justify-center flex rounded-full gap-xs ${createButtonHovered ? "bg-slate-200" : ""}`}
            onMouseEnter={() => setCreateButtonHovered(true)} onMouseLeave={() => setCreateButtonHovered(false)}>
            <img src={plusIcon} alt="image not found" className="min-w-5 min-h-5 mx-1.5" />
            <span className="mx-2">Create</span>
          </div>
          <div className="mr-1">
            <RoundedButton imageSrc={bellIcon} buttonWidth={"w-12"} buttonHeight={"h-12"} minImageHeight={"min-height-12"} minImageWidth={"min-width-12"} imageWidth={"w-12"} imageHeight={"w-12"} />
          </div>
        </div>

        <div className="flex gap-xs pr-lg items-center justify-start">
          <RoundedButton imageSrc={profileIcon} buttonWidth={"w-14"} buttonHeight={"h-14"} minImageHeight={"min-height-14"} minImageWidth={"min-width-14"} imageWidth={"w-14"} imageHeight={"w-14"} imageRounded={true} />
        </div>

      </div>
    </header >
  );
}

export default Header;
