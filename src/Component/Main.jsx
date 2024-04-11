import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Passions } from './Passions'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'
import { Footer } from './Footer'
export const Main = () => {
        return(
            <>
                <Navbar />
                <Hero />
                <Passions />
                <Portfolio />
                <Contact />
                <Footer />
            </>
        );
}