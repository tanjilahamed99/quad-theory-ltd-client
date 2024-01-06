import { FaArrowRightLong, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import footerImage from '../../public/Image2.png'
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="md:p-10 p-2 py-10 bg-orange-400 flex flex-col md:flex-row justify-center gap-20 items-center md:gap-5">
        <div className='md:w-2/3 lg:pl-20'>
            <div className='relative mb-10 w-full'>
                <input className='p-3 md:pl-5 pl-2 rounded-lg  md:rounded-full md:w-[80%] w-full mx-auto' placeholder="enter your email" type="text" />
                <button className="p-2 flex items-center gap-2 px-5 md:bg-orange-500 rounded-2xl text-orange-500 md:text-white absolute top-1 md:right-24 lg:right-[116px] xl:right-[156px] -right-3 bg-none"> Subscribe <FaArrowRightLong></FaArrowRightLong></button>
            </div>
            <div className="">
                <div className="flex  justify-between flex-col-reverse md:flex-row text-center md:text-left gap-5">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">pti<span className="text-red-500">.</span></h2>
                        <p className="font-bold">Copyright@Tripp. All right Reserved</p>
                    </div>
                    <div className="flex gap-2 items-center mt-0 md:mt-10 mx-auto">
                        <FaGoogle className="text-4xl p-2 bg-white text-orange-500 rounded-full"></FaGoogle>
                        <FaTwitter className="text-4xl p-2 bg-white text-orange-500 rounded-full"></FaTwitter>
                        <FaInstagram className="text-4xl p-2 bg-white text-orange-500 rounded-full"></FaInstagram>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/3 hidden md:flex'>
            {/* <img className='w-[100%] mx-auto' src={footerImage} alt="" /> */}
            <Image src={footerImage} alt="footer image "></Image>
        </div>
    </footer>
    );
};

export default Footer;