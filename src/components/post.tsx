import moreIcon from '../icons/more.svg';
import arrowIcon from '../icons/arrow.svg';
import subRedditIcon from '../icons/subreddit.png';
import shareIcon from '../icons/share.svg';
import RoundedButton from '../components/round-button'
import commentBubbleIcon from '../icons/commentBubble.svg';
import { useState } from 'react';

const Post = () => {
  const [postHovered, setPostHovered] = useState(false);
  const [commentsButtonHovered, setCommentsButtonHovered] = useState(false);
  const [shareButtonHovered, setShareButtonHovered] = useState(false);

  return (
    (<div className={`my-2 mx-10 ${postHovered ? "bg-slate-100" : ""} flex-col rounded-3xl`} onMouseEnter={() => setPostHovered(true)} onMouseLeave={() => setPostHovered(false)}>
      <div className="px-4 py-2">
        <div className="min-h-12 h-12 flex items-center justify-between rounded-3xl">
          <div className="flex items-center justify-left gap-2">
            <div className="flex items-center gap-1">
              <img src={subRedditIcon} alt="image not found" className="w-6 h-6 min-w-6 min-h-6 rounded-full" />
              <span>r/neovim</span>
            </div>
            <span className="text-[#576F76]">•</span>
            <div className="text-[#576F76]">
              <time dateTime="2024-01-17T13:48:02.851Z" title="Wednesday, January 17, 2024 at 7:18:02 PM GMT+5:30">18 hr. ago</time>
            </div>
          </div>
          <RoundedButton imageSrc={moreIcon} buttonWidth={10} buttonHeight={10} imageWidth={5} imageHeight={5} minImageWidth={5} minImageHeight={5} onHoverBackgroundColor={"bg-slate-300"} />
        </div>

        <div className="w-full hover:underline font-semibold text-xl mb-2">
          <span>This is the heading</span>
        </div>

        <div className="w-full text-[#2A3C42] mb-2">
          <p>It seems like Folke hasn't been maintaining it in the last months. Are people not using the distro anymore?</p>
        </div>

        <div className="flex justify-start items-center gap-4">
          <div className="flex items-center justify-left gap-2">
            <div className={`rounded-full content-center justify-center flex rounded-full gap-xs items-center bg-slate-200 py-1`}>
              <RoundedButton imageSrc={arrowIcon} buttonWidth={6} buttonHeight={6} minImageWidth={5} minImageHeight={5} imageWidth={5} imageHeight={5} onHoverBackgroundColor={"bg-slate-300"} />
              <span>0</span>
              <RoundedButton rotateImage={180} imageSrc={arrowIcon} buttonWidth={6} buttonHeight={6} minImageWidth={5} minImageHeight={5} imageWidth={5} imageHeight={5} onHoverBackgroundColor={"bg-slate-300"} />
            </div>
          </div>
          <div className={`flex items-center justify-left gap-2 ${commentsButtonHovered ? "bg-slate-300" : "bg-slate-200"} rounded-full`} onMouseEnter={() => setCommentsButtonHovered(true)} onMouseLeave={() => setCommentsButtonHovered(false)}>
            <div className={`rounded-full content-center justify-center flex rounded-full gap-xs items-center py-1 px-3.5`}>
              <RoundedButton imageSrc={commentBubbleIcon} buttonWidth={6} buttonHeight={6} minImageWidth={5} minImageHeight={5} imageWidth={5} imageHeight={5} onHoverBackgroundColor={"bg-inherit"} />
              <span>10</span>
            </div>
          </div>
          <div className={`flex items-center justify-left gap-2 ${shareButtonHovered ? "bg-slate-300" : "bg-slate-200"} rounded-full`} onMouseEnter={() => setShareButtonHovered(true)} onMouseLeave={() => setShareButtonHovered(false)}>
            <div className={`rounded-full content-center justify-center flex rounded-full gap-xs items-center py-1 px-3.5`}>
              <RoundedButton imageSrc={shareIcon} buttonWidth={6} buttonHeight={6} minImageWidth={5} minImageHeight={5} imageWidth={5} imageHeight={5} onHoverBackgroundColor={"bg-inherit"} />
              <span>10</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
  )
}

export default Post;
