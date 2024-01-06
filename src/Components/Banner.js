import Image from 'next/image';
import bannerImg from '../../public/Image1.png'


const Banner = () => {
    return (
        <div className="my-20 md:bg-orange-400 flex flex-col justify-between  md:flex-row items-center p-10 rounded-2xl w-full mx-auto">
            <div className='md:w-1/2 mx-auto md:text-white text-center md:text-start w-full'>
                <h2 className='lg:text-5xl text-2xl mb-4 font-bold w-full'>Deliver Food To Your <br /> Door Step |</h2>
                <p className='text-xl font-medium'>Authentic Foodj,Quick Service,Fast Delivery</p>
            </div>
            <div className='md:1/2 mx-auto  bg-orange-400 md:bg-none relative  h-[112px] md:h-full mt-10 md:mt-0 rounded-xl'>
                {/* <img className=' md:relative -mt-12 md:-top-0 w-full' src={bannerImg} alt="asxasx" /> */}
                <Image src={bannerImg} alt="banner img"></Image>
            </div>
        </div>
    );
};

export default Banner;