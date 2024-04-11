import mypic from '../image/footer.png'
import mypic2 from '../image/footer2.png'
export const Footer = () =>{
    const Name = ['Design by Mohammad Halimi']
    return(
      <>
      <div className='md:mt-24 mt-12'>
          <div className='relative'>
              <img className='md:block hidden w-full' src={mypic} alt='footer'/>
              <img className='md:hidden block w-full' src={mypic2} alt='footer'/>
              <div className='md:block hidden absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-2xl text-center leading-4 mb-2 font-primaryRegular'>
                  {Name}
              </div>
              <div className='md:hidden block absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-lg text-center leading-4 mb-2 font-primaryRegular'>
                  {Name}
              </div>
          </div>
      </div>
      </>
    );
}