import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {

    const ulLInks = <>

        <li className="hover:text-orange-500"><a>Home</a></li>
        <li className="hover:text-orange-500"><a>Details</a></li>
        <li className="hover:text-orange-500"><a>Category</a></li>
        <li className="hover:text-orange-500"><a>My Favorite</a></li>
        <li className="hover:text-orange-500"><a>Profile</a></li>
        <li className="hover:text-orange-500"><a>Login/Sign Up</a></li>

    </>

    return (
        <div className="flex justify-between items-center px-3 gap-3">
            <div className="md:w-[20%]">
                <a className="md:text-xl font-extrabold">pti.</a>
            </div>
            <div className=" md:w-[60%] flex items-center md:gap-3 gap-1">
                <div className="relative md:w-[70%]">
                    <input className="md:py-3 py-2 md:pl-10 pl-7  md:pr-3 bg-white rounded-lg md:w-full" type="text" placeholder="Search Audiobook" />
                    <FaSearch className="absolute left-2 top-3 md:top-4 md:left-3 md:text-xl  font-bold text-orange-500"></FaSearch>
                </div>
                <div className="md:w-[20%] relative group">
                    <button className="bg-white font-bold gap-1 text-sm flex md:justify-between items-center md:w-full py-3 md:px-2 px-1 rounded-lg">MENU <FaArrowDown className="text-orange-500"></FaArrowDown></button>
                    <ul className="absolute group-hover:-mt-3 group-hover:top-16 text-xs md:text-base group-hover:-left- -mt-[20000px]  w-full  bg-white rounded-xl space-y-1 p-3 font-medium">
                        {
                            ulLInks
                        }
                    </ul>
                </div>
            </div>
            <div className="hidden md:flex">
                <CgProfile className="bg-orange-500 text-white rounded-full text-4xl"></CgProfile>
            </div>
        </div>
    );
};

export default Navbar;