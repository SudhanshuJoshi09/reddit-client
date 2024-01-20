import React, { useState } from 'react';
import loadingIcon from '../icons/loading.svg'


interface RoundedButtonProps {
  buttonWidth?: string;
  buttonHeight?: string;
  padding?: string;
  onHoverBackgroundColor?: string;
  onClickAction?: () => void;
  minImageWidth?: string;
  minImageHeight?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageSrc?: string | undefined;
  imageRounded?: boolean;
  rotateImage?: string;
}


const RoundedButton: React.FC<RoundedButtonProps> = ({
  buttonWidth = "w-13",
  buttonHeight = "w-13",
  padding = "p-1.5",
  onHoverBackgroundColor = "bg-slate-200",
  onClickAction = () => console.log("Please provide the actions to be performed !!"),
  imageSrc = loadingIcon,
  minImageHeight = "min-w-9",
  minImageWidth = "min-w-9",
  imageWidth = "min-w-9",
  imageHeight = "min-w-9",
  imageRounded = false,
  rotateImage = "rotate-0",
}) => {

  const [isHovered, setIsHovered] = useState(false);
  const resolvedImageSrc = imageSrc !== undefined ? imageSrc : loadingIcon
  const imageClassName = `${imageWidth} ${imageHeight} ${minImageWidth} ${minImageHeight} ${rotateImage}${imageRounded ? " rounded-full" : ""}`

  return (
    <button className={`${padding} rounded-full ${isHovered ? onHoverBackgroundColor : ""} items-center justify-center flex ${buttonHeight} ${buttonWidth} mx-2`}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClickAction}>
      <img src={resolvedImageSrc} alt="image not found" className={imageClassName} />
    </button>
  )

}

export default RoundedButton;
