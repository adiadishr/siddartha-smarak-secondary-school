import { FaPhone, FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



const Topbar = () => {


    return (
        <div id="topbar"
            className='bg-sky-900 fixed z-10 flex w-full py-2 items-center justify-end md:justify-between px-[7.5%] text-white transition-all duration-300  top-0'>
            <div className='items-center justify-center hidden gap-2 md:flex'><IoMdMail /> Email: info@abcsecondaryschool.com</div>
            <div className='flex justify-between w-full gap-8 tracking-tight divide-orange-200 md:divide-x md:justify-center md:w-max'>
                <div className="flex items-center justify-center gap-2"><FaPhone />Call: 123 4561 5523</div>
                <div className="flex items-center justify-center gap-8 pl-8 text-lg">
                    <FaFacebook className="hover:scale-125 duration-500 cursor-pointer hover:rotate-[360deg]" />
                    <FaInstagram className="hover:scale-125 duration-500 cursor-pointer hover:rotate-[360deg]" />
                </div>
            </div>
        </div>
    )
}

export default Topbar