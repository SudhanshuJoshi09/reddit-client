import React, { useState, ReactElement, JSXElementConstructor } from 'react';
import ArrowIcon from '../icons/dropdownArrow.svg';

interface DropDownButtonProps {
  dropDownButtonLabel: ReactElement<any, string | JSXElementConstructor<any>> | null;
  // dropDownButtonLabel: ReactElement<any, string | JSXElementConstructor<any>>;
  // dropDownButtonLabel: ReactElement;
}

interface DropDownButtonResponse {
  buttonJsx: ReactElement;
  buttonExpanded: boolean;
}

const DropDownButton = ({
  dropDownButtonLabel,
}: DropDownButtonProps): DropDownButtonResponse => {
  const [expandButtonClicked, setExpandButtonClicked] = useState(false);

  const buttonJsx: ReactElement = (
    <button
      className="flex rounded-md hover:bg-slate-200 flex-row mt-2 w-full items-center justify-between px-2"
      onClick={() => {
        setExpandButtonClicked((prev: boolean) => !prev);
      }}
    >
      {dropDownButtonLabel}
      <img
        src={ArrowIcon}
        alt="icon not found"
        className={`min-w-4 min-h-4 rounded-full transition transform ${expandButtonClicked ? 'rotate-180' : 'rotate-0'
          }`}
      />
    </button>
  );

  return { buttonJsx, buttonExpanded: expandButtonClicked };
};

interface SideBarSectionProps {
  contents: ReactElement;
}

const SideBarSection: React.FC<SideBarSectionProps> = ({
  contents
}) => {
  return (
    <div className="bg-neutral-background z-[2] box-border flex flex-col mt-0 mb-0 pt-xs xs:pt-md shrink-0 s:shrink w-full min-h-screen-without-header select-none flex flex-col justify-center">
      {contents}
    </div>
  )
}

interface SideBarLabelProps {
  imageSrc?: string;
  label: String;
}

const SideBarLabel: React.FC<SideBarLabelProps> = ({
  imageSrc,
  label,
}) => {
  const imagePresent = imageSrc != null;
  return (
    <div className="flex justify-between gap-x-2 px-2 py-2">
      {imagePresent && <img src={imageSrc} alt="icon not found" className="w-5 h-5" />}
      <span>{label}</span>
    </div>
  )
}

export {
  SideBarSection,
  DropDownButton,
  SideBarLabel,
}
