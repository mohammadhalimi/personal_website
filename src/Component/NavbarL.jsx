export const NavbarL = () => {
    const name ={firstName:'Mohammad' , lastName:'Halimi'}
    return(
        <>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="https://mohammadhalimi.ir/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://img-forum-wt-com.cdn.gaijin.net/original/3X/4/d/4db6e1c7aefa024c2afcbde8258c2e7fa535656b.png" className="h-12" alt="MH Logo"/>
                        <span className="self-center text-2xl font-primarySemibold whitespace-nowrap text-color4">{name.firstName}<span className="self-center text-2xl font-primaryRegular whitespace-nowrap text-color5">{name.lastName}</span></span>
                    </a>
                </div>
            </nav>
        </>
    );
}