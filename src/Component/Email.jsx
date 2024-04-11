import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useState } from "react";

export const Email = () =>{
    const [ firstName , SetfirstName ] = useState('');
    const [ lastName , SetlastName ] = useState('');
    const [ email , Setemail ] = useState('');
    const [ text , Settext ] = useState('');
    const [ submit , Setsubmit ] = useState(false);
    const firstAndlast = [{
        title:'First name',
        placeholder:'your First name',
        value:firstName,
        handleChange: (e) => {
            SetfirstName(e.target.value)
        }
    },{
        title:'Last name',
        placeholder:'your Last name',
        value:lastName,
        handleChange: (e) => {
            SetlastName(e.target.value)
        }
    }]
    const emailAndText ={
        email:'Email address',
        message:'Your message',
        placeholder1:'example.gmail.com',
        placeholder2:'Write your thoughts here...',
        handleChange1: (e) => {
            Setemail(e.target.value)
        },
        handleChange2: (e) => {
            Settext(e.target.value)
        },
        sub:'Submit',
        comment:'Thank you for your message, I will read it'
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        Setsubmit(true)
    }

    return(
        <>
            <Navbar />
            <div className='container lg:w-1/2 w-full min-h-screen items-center justify-between mx-auto p-4'>
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        {firstAndlast.map((ti)=>(
                            <div>
                                <label htmlFor="first_name"
                                       className="block mb-2 text-sm md:text-base font-primaryMedium text-gray-900">{ti.title}</label>
                                <input type="text" value={ti.value} onChange={ti.handleChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder={ti.placeholder} required/>
                            </div>
                        ))}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm md:text-base font-primaryMedium text-gray-900">{emailAndText.email}</label>
                        <input type="email" onChange={emailAndText.handleChange1}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder={emailAndText.placeholder1} required/>
                    </div>
                    <label htmlFor="message" className="block mb-2 text-sm md:text-base font-primaryMedium text-gray-900">{emailAndText.message}</label>
                    <textarea rows="4" onChange={emailAndText.handleChange2}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                              placeholder={emailAndText.placeholder2}></textarea>

                    <button disabled={text.length === 0} onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-primaryMedium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">{emailAndText.sub}</button>
                    {submit && <p className='text-green-700 font-primarySemibold mt-4 md:text-lg text-base'>{emailAndText.comment}</p>}
                </form>
            </div>
            <Footer />
        </>
    );
}