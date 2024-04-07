import hero from '../image/heroImg.png'

const information = {
    hi:'Hi!',
    names:'I’m Mohammad Halimi.\n' +
        'a Front-End Developer',
    Introduction:'Front-End developer based in Tehran, Iran\n' +
        'I’am coding with a clean and beautiful problem\n' +
        'solving in mind.'
}
export const Hero = () =>{
    return(
      <>
          <div className="container max-w-screen-xl items-center justify-between mx-auto p-4">
              <div className="flex flex-col-reverse md:flex-row">
                  <div className="md:w-1/2 w-full pt-6">
                      <p className='text-color1 text-2xl md:text-3xl'>{information.hi}</p>
                      <h1 className='text-color1 text-3xl md:text-5xl font-bold pt-2'>
                          {information.names}
                      </h1>
                      <p className='text-lg md:text-2xl text-color3 pt-8'>
                          {information.Introduction}
                      </p>
                  </div>
                  <div className="md:w-1/2 w-full p-2 flex justify-center items-center">
                      <img src={hero} alt='hero img'/>
                  </div>
              </div>
          </div>
      </>
    );
}