import mypic1  from '../image/undraw_Detailed_analysis_re_tk6j 1.png'
import mypic2  from '../image/undraw_Design_process_re_0dhf 1.png'
import mypic3  from '../image/undraw_Wireframing_re_q6k6 1.png'

export const Passions = () => {
    const info = [{
        id:1,
        skill:'Front-End',
        dev:'Developer',
        text:'(Sass, Bootstrap, Tailwind)',
        pic:mypic3
        },{
        id:2,
        skill:'Back-End',
        dev:'Developer',
        text:'(Jango, NodeJs)',
        pic:mypic1
        },{
        id:3,
        skill:'UI/UX',
        dev:'Designer',
        text:'(Figma, Zeplin, Adobe XD)',
        pic:mypic2
    }]
    const pass ={ad:'Additional' , pass:'passions'}
    return(
      <>
      <div className='max-w-screen-xl items-center justify-between mx-auto text-center md:mt-24 mt-12'>
              <span className="self-center md:text-3xl text-2xl font-normal whitespace-nowrap text-color5 text-center">{pass.ad}<span className="self-center md:text-3xl text-2xl font-semibold whitespace-nowrap text-color5 ps-2">{pass.pass}</span></span>
          <div className='flex flex-wrap justify-center mt-10'>
              {info.map((ti) =>(
                  <div className="p-4 max-w-sm" key={ti.id}>
                      <div className="flex rounded-lg h-full p-8 flex-col shadow-xl">
                          <div className="items-center mb-3">
                              <div  className="mr-3 inline-flex items-center justify-center black flex-shrink-0">
                                  <a href="#" onClick={(e)=> e.preventDefault()}>
                                      <img className="rounded-t-lg" src={ti.pic} alt="pic"/>
                                  </a>
                              </div>
                              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black text-center">{ti.skill}<span className="self-center text-2xl font-normal whitespace-nowrap text-black ps-2">{ti.dev}</span></span>
                          </div>
                          <div className="flex flex-col justify-between flex-grow">
                              <p className="leading-relaxed text-lg black">
                                  {ti.text}
                              </p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
      </>
    );
}