"use client"


import axios from "axios";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useForm } from "react-hook-form";
import Image from "next/image";


const Recommended = () => {


    const [popular, setPopular] = useState([])

    useEffect(() => {
        axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => setPopular(res.data.Items))
    }, [])


    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 15,
        },
    })


    const { register, handleSubmit, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className="px-5 my-10">
            <div className="flex justify-between mb-3 ">
                <h2 className="text-lg font-bold">Recommended</h2>
                <div>
                    <button className="text-lg text-orange-500 font-bold" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        Add More
                    </button>
                    <dialog id="my_modal_3" className="bg-orange-400 rounded-2xl">
                        <div className="p-10">
                            <form method="dialog">
                                <button className="text-white absolute right-2 top-2">✕</button>
                            </form>
                            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-span-2 md:col-span-1">
                                    <h2 className="text-sm font-bold mb-1 text-white">Name</h2>
                                    <input className="p-2 rounded-xl" {...register("name")} placeholder="name" type="text" required />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <h2 className="text-sm font-bold mb-1 text-white">Price</h2>
                                    <input className="p-2 rounded-xl" {...register("price")} placeholder="Price" type="number" required />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <h2 className="text-sm font-bold mb-1 text-white">ImageUrl</h2>
                                    <input className="p-2 rounded-xl" {...register("ImageUrl")} placeholder="http" type="text" required />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <h2 className="text-sm font-bold mb-1 text-white">Rating</h2>
                                    <input className="p-2 rounded-xl" {...register("rating")} placeholder="name" type="number" required />
                                </div>
                                <div className="col-span-2" method="dialog">
                                    <input className="text-orange-500 mt-2 p-1 rounded-2xl w-full bg-white " type="submit" value='submit' />
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {
                    popular?.map((item, idx) => <div
                        className={`keen-slider__slide number-slide${idx}`}
                        key={item.Id}>
                        <img className="md:w-full lg:h-[300px] h-[100px] w-[500px]" src={item?.ImageUrl} alt="" />
                        {/* <Image src={item.ImageUrl} width={0} height={0} alt="hello"></Image> */}
                        <h2 className="text-center font-semibold mt-2 md:text-lg text-sm">{item?.Name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recommended;