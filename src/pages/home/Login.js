import { Link } from 'react-router-dom';
import React from "react";


export function LoginPage() {
    return (
        <div className="pt-16 sm:pt-20 md:pt-16 lg:pt-16">
            <h2 className="title-font tracking-widest titleDua ml-20">Work</h2>
            <h2 className="title-font tracking-widest titleDua ml-32"><b>Mote</b></h2>
            <section className="text-gray-700 body-font relative">
                <div className="container px-5 mx-auto flex sm:flex-no-wrap flex-wrap">
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <p className="leading-relaxed mb-5 decs text-3xl">Memudahkan anda dalam bekerja secara remote</p>
                        <div className="relative mb-4">
                            <input type="text" id="name" name="name" placeholder="Email atau Username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-full py-2 px-4" />
                        </div>
                        <div className="relative mb-4">
                            <input type="password" id="password" name="password" placeholder="Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-full py-2 px-4" />
                        </div>
                        <Link to="/dashboard" className="text-white text-center border-0 py-2 px-6 rounded-full py-2 px-4 tbl">Masuk</Link>
                        <Link to="/registration" className="text-xs text-center text-gray-500 mt-3"><b>Belum Punya Akun ?</b></Link>
                    </div>
                    <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <img alt="ecommerce" className="w-full lg:h-auto md:h-auto sm:h-auto h-auto object-cover object-center rounded" src="https://res.cloudinary.com/zada/image/upload/v1605893419/login-min_ugp9dm.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}