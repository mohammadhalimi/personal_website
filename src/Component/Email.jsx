import { NavbarL } from './NavbarL'
import { Footer } from './Footer'
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

export const Email = () =>{
     const id =5;
    const [ text , Settext ] = useState('');
    const [ confirm , SetConfirm ] = useState(false)
    const comment = ['Thanks for your message, I will read it' , 'The operation was not successful. Please try again']
    const firstAndlast = [{
        title:'First name',
        placeholder:'your First name',
        name:'user_firstname',
        id:1
    },{
        title:'Last name',
        placeholder:'your Last name',
        name:'user_lastname',
        id:2
    },{
        title: 'Email address',
        placeholder: 'example@gmail.com',
        name: 'user_email',
        id:3
    },{
        title: 'Subject',
        placeholder: 'subject',
        name: 'subject',
        id:4
    }]
    const text_button = {
        message:'Your message',
        sub:'Submit',
        placeholder:'Write your thoughts here...',
        name:'message',
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_qkkpgmo', 'template_3o6s0db', form.current, {
                publicKey: 'S-VQ3veJX0IRSAIIp',
            })
            .then(
                () => {
                   console.log("success...")
                },
                (error) => {
                    console.log(error.text)
                },
            );
        e.target.reset()
    };

    return(
        <>
            <NavbarL />
            <div className='container lg:w-1/3 md:w-1/2 w-full min-h-screen items-center justify-between mx-auto p-4 drop-shadow-lg' id='email'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid gap-6 mb-6 grid-cols-1">
                        {firstAndlast.map((ti)=>(
                            <div key={ti.id}>
                                <label htmlFor={ti.title}
                                       className="block mb-2 text-sm md:text-base font-primaryMedium text-gray-900">{ti.title}</label>
                                <input type="text"  name={ti.name} id={ti.title}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder={ti.placeholder} required/>
                            </div>
                        ))}
                    </div>
                    <label htmlFor="message" className="block mb-2 text-sm md:text-base font-primaryMedium text-gray-900">{text_button.message}</label>
                    <textarea rows="4" name={text_button.name} value={text} onChange={(e) => Settext(e.target.value)} id='message'
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                              placeholder={text_button.placeholder}></textarea>

                    <button disabled={text.length === 0} onClick={() => SetConfirm(true)}  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-primaryMedium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">{text_button.sub}</button>
                    { confirm && <p className='text-green-700 font-primarySemibold mt-4 md:text-lg text-base'>{comment[0]}</p>}
                </form>
            </div>
            <Footer />
        </>
    );
}