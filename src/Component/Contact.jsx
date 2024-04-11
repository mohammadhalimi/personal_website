import mypic1 from '../image/github.png'
import mypic2 from '../image/Instagram.png'
import mypic3 from '../image/Email.png'
import mypic4 from '../image/telegram.png'
import { Outlet, Link } from "react-router-dom";
export const Contact = () => {
    const info =[
        {
            id:1,
            pic:mypic1,
            text:'Github',
            link:'https://github.com/mohammadhalimi'
        },
        {
            id:2,
            pic:mypic2,
            text:'Instagram',
            link:'/#'
        },
        {
            id:3,
            pic:mypic3,
            text:'Email',
            link:'/email'
        },
        {
            id:4,
            pic:mypic4,
            text:'Telegram',
            link:'https://t.me/mohammad_halimi'
        }
    ]
    const pass ={ad:'Contact' , pass:'Me'}

    return(
      <>
          <div className='max-w-screen-xl items-center justify-between mx-auto text-center md:mt-24 mt-12'>
              <span className="self-center md:text-3xl text-2xl font-primaryRegular whitespace-nowrap text-color5 text-center">{pass.ad}<span className="self-center md:text-3xl text-2xl font-primarySemibold whitespace-nowrap text-color5 ps-2">{pass.pass}</span></span>
              <div className='flex flex-wrap justify-center mt-10'>
                  {info.map((ti) =>(
                      <div className="p-4 max-w-sm" key={ti.id}>
                          <div className="flex rounded-lg h-full p-8 flex-col">
                              <div className="items-center mb-3">
                                  <div  className="mr-3 inline-flex items-center justify-center black flex-shrink-0">
                                      <Link to={ti.link} onClick={(e) => ti.link === '/#' ? e.preventDefault() : null}>
                                          <img className="rounded-t-lg" src={ti.pic} alt="pic"/>
                                      </Link>
                                  </div>
                              </div>
                              <div className="flex flex-col justify-between flex-grow">
                                  <p className="leading-relaxed text-xl black font-primaryRegular">
                                      {ti.text}
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <Outlet />
      </>
    );
}