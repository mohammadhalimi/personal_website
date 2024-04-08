import mypic1 from '../image/Sendpay.png'
import mypic2 from '../image/E-commerce.png'
import mypic3 from '../image/B Learning.png'
export const Portfolio = () => {
    const pass ={ad:'My' , pass:'Portfolio'}
    const gallery = [{
        pic:mypic1
    },{
        pic:mypic2
    },{
        pic:mypic3
    }]
    return(
        <>
            <div className='max-w-screen-xl items-center justify-between mx-auto text-center md:mt-24 mt-12'>
                <span className="self-center md:text-3xl text-2xl font-normal whitespace-nowrap text-color5 text-center">{pass.ad}<span className="self-center md:text-3xl text-2xl font-semibold whitespace-nowrap text-color5 ps-2">{pass.pass}</span></span>
                <div className='flex flex-wrap justify-center mt-10'>
                    {gallery.map((ti) =>(
                        <div className="p-4 max-w-sm">
                            <div className="flex rounded-lg h-full w-full flex-col shadow-xl">
                                <div className="items-center">
                                    <div
                                        className="inline-flex items-center justify-center black flex-shrink-0">
                                        <a href="#">
                                            <img className="rounded-t-lg w-full h-full" src={ti.pic} alt="pic"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}