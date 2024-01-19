import Header from './components/header';
import Post from './components/post';
import { useState } from 'react';

const App = () => {

  const [displaySideBar, setSideBar] = useState(false);

  return (
    <>
      <div>
        <Header setSideBar={setSideBar} />
        {displaySideBar &&
          (<div className="fixed left-0 top-19 rounded-none w-full max-w-full h-screen z-[4] scrollbar-hide shadow-none p-0 m-0 bg-transparent">
            <div className="flex min-h-full">
              <div className="w-[200px] s:pl-xs h-full">
                <div className="h-100 w-100 text-14">
                  <ul>
                    <li>Home</li>
                    <li>Popular</li>
                    <li>All</li>
                  </ul>
                </div>
              </div>
              <div className="grow w-100 h-100">
                <div className="bg-black opacity-50"></div>
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
