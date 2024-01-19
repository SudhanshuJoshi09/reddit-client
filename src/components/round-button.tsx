import React, { useState } from 'react';
import loadingIcon from '../icons/loading.svg'


interface RoundedButtonProps {
  buttonWidth?: number;
  buttonHeight?: number;
  padding?: string;
  onHoverBackgroundColor?: string;
  onClickAction?: () => void;
  minImageWidth?: number;
  minImageHeight?: number;
  imageWidth?: number;
  imageHeight?: number;
  imageSrc?: string | undefined;
  imageRounded?: boolean;
  rotateImage?: number;
}


const RoundedButton: React.FC<RoundedButtonProps> = ({
  buttonWidth = 13,
  buttonHeight = 13,
  padding = "p-1.5",
  onHoverBackgroundColor = "bg-slate-200",
  onClickAction = () => console.log("Please provide the actions to be performed !!"),
  imageSrc = loadingIcon,
  minImageHeight = 9,
  minImageWidth = 9,
  imageWidth = 9,
  imageHeight = 9,
  imageRounded = false,
  rotateImage = 0,
}) => {

  const [isHovered, setIsHovered] = useState(false);
  const resolvedImageSrc = imageSrc !== undefined ? imageSrc : loadingIcon

  return (
    <button className={`${padding} rounded-full ${isHovered ? onHoverBackgroundColor : ""} items-center justify-center flex h-${buttonHeight} w-${buttonWidth} mx-2`}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClickAction}>
      <img src={resolvedImageSrc} alt="image not found" className={`w-${imageWidth} h-${imageHeight} min-w-${minImageWidth} min-h-${minImageHeight} ${imageRounded ? "rounded-full" : ""} rotate-${rotateImage}`} />
    </button>
  )

}

export default RoundedButton;
