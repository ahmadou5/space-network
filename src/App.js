
import { useState } from "react";
import { IoMenu } from "react-icons/io5"
import HeaderLogo from './assets/SPACEHEADER.png'
import Logo from './assets/SPACE 1.png'

function App() {
  const [isActive, setisActive] = useState(false);



  return (
    <div className="w-screen min-h-screen flex-col flex items-center justify-center relative bg-primary pb-20">
       {/* navbar*/}
       <nav className="w-full px-6 z-50 fixed  top-4 flex justify-center items-center">
        <div className="w-full md:w-900 bg-navBar p-4 rounded-xl flex items-center">
          <img className="w-50 h-10 md:w-76 md:h-15" src={HeaderLogo} alt="space"/>

          <div className="hidden md:flex items-center gap-6 ml-9 flex-1">
            <a href="#home" className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">About</a>
            <a href="#mint" className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">Mission</a>
            <a href="#wlist" className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">Road Map</a>
            <a href="#about" className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">Team</a>
            <a href="#ddao" className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">DDAO</a>
            <button  className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-blue-300 duration-100 ease-in-out">Join Our Discord</button>
          </div>
          <div  className="block md:hidden ml-auto cursor-pointer" onClick={()=> setisActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />
          </div>

          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a href="#home" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">About</a>
              <a href="#mint" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">Mission</a>
              <a href="#wlist" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">Road Map</a>
              <a href="#about" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">Team</a>
              <a href="#ddao" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-blue-300 cursor-pointer duration-100 ease-in-out">DDAO</a>
              <button  onClick={() => setisActive(false)} className="text-base text-textBase font-medium hover:text-blue-300 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Join Our Discord</button>

            </div>
          )}
        </div>
      </nav>
      
      <main className="w-[80%] relative mt-3">
        <div className="w-full h-685 flex  items-center justify-center">
            <h1 className=" font-mono text-5xl md:text-8xl text-white">
              <span className=" text-blue-300">Cross</span>-Chain <br/> Everything!

            </h1>
           

        </div>
        <div>

        </div>
        {/* about section*/}
        <section className="w-full md:h-600 grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 my-24" id="home">
          {/* img box*/}
          <div className="w-full h-420 flex items-center justify-center">
            <div className="w-full h-420 bg-transparent relative rounded-md">
              <img className="w-320 h-320 absolute object-cover shadow-md rounded-lg" src={Logo} alt="space network" />
            </div>
          </div>

          {/* content */}
          <div className="w-full h-420 flex flex-col items-center justify-center">
            <p className="text-xl font-mono md:text-3xl text-textBase text-center">
              Using the Power of Generic Messaging
            </p>
            <p className="text-xl md:text-3xl text-textBase text-center">
              The <span className="text-blue-300 font-bold text-2xl md:text-4xl">SPACE NETWORK</span> Interoperability Protocol Make Cross-Chain Transactions More Efficient than Ever Before
            </p>
            <button whileTap={{scale: 0.7}} class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get Yours
                </span>
            </button>
          </div>
        </section>
        
          
        
        
        {/* contact section */}
        <section id="about" className="h-420 w-full  md:mt-14 mt-4 my-24">
          {/* content */}
          <div className="w-full h-420  items-center relative justify-center">
            <h1 className="text-2xl mb-9 md:text-5xl font-mono text-white text-center">
              What is Cross-Chain?
            </h1>
            <p className="text-md md:2xl py-4 font-mono text-white font-extrabold text-center">The Future Of Web3 Will be Powered by Cross-Chain</p>
            <p className="text-md md:2xl py-4 font-mono text-textBase  text-center">We aim to Bring You the Best Ever Cross-Chain</p>
            
          </div>
        </section>
        <section id="about" className="h-800 md:h-420 w-full grid grid-cols-1 md:grid-cols-2 m-auto space-y-5 mb-9 md:mb-8 md:space-y-0 mt-8 my-24 ">
          {/* content */}
          <div className="w-[80%] h-370 md:h-420 m-auto items-center relative rounded-3xl border-solid border border-blue-300 justify-center bg-transparent">
            <h1 className="text-xl mt-9 mb-9 md:text-3xl font-mono text-white text-center font-extrabold">Cross-Assets</h1>
            <p className="text-md md:2xl py-4 font-mono text-textBase  text-center">Cross-Chain Your Asset, access it from Multiple Supported Blockchains with ease</p>
          </div>
          <div className="w-[80%] h-370 md:h-420 m-auto items-center relative rounded-3xl border-solid border border-blue-300 justify-center bg-transparent">
            <h1 className="text-xl mb-9 mt-9 md:text-3xl font-mono text-white text-center font-extrabold">Cross-Data</h1>
            <p className="text-md md:2xl py-4 font-mono text-textBase  text-center">fu nk u</p>
          </div>
          {/* image */} 
          
        </section>
        

        {/* contact section */}
        <section id="wlist" className="w-full h-420 my-24 mt-9 flex flex-col items-center justify-center">
         <p className="text-2xl text-gray-400 capitalize">Our Mission</p>
          
        </section>

        {/* contact section */}
        <section id="mint" className="w-full h-420 my-24 flex flex-col items-center justify-center">
         <p className="text-2xl text-gray-400 capitalize">Road Map</p>
          
        </section>

        {/* contact section */}
        <section id="todo" className="w-full  h-420 my-24 flex flex-col items-center justify-center">
         <p className="text-2xl text-gray-400 capitalize">To do list</p>
          
        </section>

        {/* contact section */}
        <section id="ddao" className="w-full h-420 my-24 flex flex-col items-center justify-center">
         <p className="text-2xl text-gray-400 capitalize">DDAO Token</p>
          
        </section>
        <section id="about" className="h-420 w-full grid grid-cols-1 mt-24  md:mt-8  my-24">
          <div className="w-full h-full flex items-center relative justify-center">
              <img className="w-[100%] h-320 absolute object-cover shadow-md  rounded-lg" src={HeaderLogo} alt="space network logo" />
          </div>
        </section>
      </main> 
      

      



     
    </div>
  );
}

export default App;
