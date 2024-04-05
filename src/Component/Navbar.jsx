import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
export const Navbar = () =>{
    const [open , Setopen] = useState(false);
    const handleClick = () =>{
        if(open === false){
            Setopen(true)
        }
        else{
            Setopen(false)
        }

    }
    const link = [{
        title:'About'
    },
        {
            title:'Passions'
        },
        {
            title:'Portfolio'
        },
        {
            title:'Contact me'
        }]
return(
  <>

      <nav className="bg-white border-gray-200 relative">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://mohammadhalimi.ir/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="	https://img-forum-wt-com.cdn.gaijin.net/original/3X/4/d/4db6e1c7aefa024c2afcbde8258c2e7fa535656b.png" className="h-12" alt="Flowbite Logo"/>
                  <span
                      className="self-center text-2xl font-semibold whitespace-nowrap">Mohammad Halimi</span>
              </a>
              <button onClick={handleClick} data-collapse-toggle="navbar-default" type="button"
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      aria-controls="navbar-default" aria-expanded="false">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                      {link.map((ti) => (
                          <li>
                              <a href="#"
                                 className="block text-xl py-2 text-color1 hover:bg-color2 hover:text-white px-3 bg-orange-500 rounded md:bg-transparent p-2 rounded-lg"
                                 aria-current="page">{ti.title}</a>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
          {
              open && <div className="w-80 absolute z-10 top-0 right-0 block md:hidden bg-gray-50">
                  <button onClick={handleClick} data-collapse-toggle="navbar-default" type="button"
                          className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-red-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                          aria-controls="navbar-default" aria-expanded="false">
                      <BsArrowRight />
                  </button>
                  <ul className="font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                      {link.map((ti) => (
                          <li>
                              <a href="#"
                                 className="block text-xl py-2 text-color1 hover:bg-color2  hover:text-white px-3 rounded md:p-0"
                                 aria-current="page">{ti.title}</a>
                          </li>
                      ))}
                  </ul>
              </div>
          }
      </nav>

  </>
);
}