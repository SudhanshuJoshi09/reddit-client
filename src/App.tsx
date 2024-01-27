import Header from './components/header';
import Post from './components/post';
import HomeIcon from './icons/home.svg';
import PopularIcon from './icons/popular.svg';
import { useState } from 'react';
import { SideBarSection, DropDownButton, SideBarLabel } from './components/sidebar';

const App = () => {

  const [displaySideBar, setSideBar] = useState(false);
  const { buttonJsx: topicsButton, buttonExpanded: topicsExpanded } = DropDownButton({ dropDownButtonLabel: SideBarLabel({ label: "TOPICS" }) });
  const { buttonJsx: gamingButton, buttonExpanded: gamingExpanded } = DropDownButton({ dropDownButtonLabel: SideBarLabel({ label: "Gaming", imageSrc: HomeIcon }) });

  return (
    <>
      <div>
        <Header setSideBar={setSideBar} />
        {displaySideBar &&
          (<div className="fixed left-0 top-19 rounded-none w-full max-w-full h-screen z-[4] scrollbar-hide shadow-none p-0 m-0 bg-transparent">
            <div className="flex min-h-full">
              <div className="w-[200px] s:pl-xs flex-col bg-white">
                <div className="w-full h-full px-2">

                  <SideBarSection contents={
                    <ul className="flex flex-col justify-center mt-1">
                      <li>
                        <div className="flex rounded-md hover:bg-slate-200 flex-row">
                          <a href="/?feed=home"><SideBarLabel imageSrc={HomeIcon} label="Home" /></a>
                        </div>
                      </li>
                      <li>
                        <div className="flex rounded-md hover:bg-slate-200 flex-row">
                          <a href="/r/popular/"><SideBarLabel imageSrc={PopularIcon} label="Popular" /></a>
                        </div>
                      </li>
                    </ul>
                  } />

                  <hr className="w-100 my-sm border-neutral-border-weak" />

                  <div className="mb-2">
                    <SideBarSection contents={topicsButton} />
                    <div className={`transition transform ${topicsExpanded ? 'h-full' : 'h-0 opactiy-0 overflow-hidden'}`}>
                      <SideBarSection contents={gamingButton} />
                    </div>
                  </div>

                  <hr className="w-100 my-sm border-neutral-border-weak" />

                  <div className="py-md grow h-full">
                    Something ...
                  </div>

                </div>
              </div>
              <div className="grow w-100 h-100">
                <div className="bg-black opacity-50 h-full"></div>
              </div>
            </div>
          </div>)
        }
      </div>

      <section className="flex flex-col justify-center">
        <Post />
        <hr className="w-100 my-sm border-neutral-border-weak" />
        <Post />
        <hr className="w-100 my-sm border-neutral-border-weak" />
      </section>
    </>
  )
}

export default App;
