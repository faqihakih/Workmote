import { Link } from 'react-router-dom';
import React from "react";


export function HomePage() {
    return (
        <div>
            <section className="pt-40 sm:pt-56 md:pt-0 lg:pt-3">
                <div className="container px-5 py-20 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="title-font tracking-widest title">Work<b>Mote</b></h2>
                            <p className="desc mb-10">Memudahkan anda dalam bekerja secara remote</p>
                            <Link to="/login" className="tbl">Mulai</Link>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={require('./../../assets/img/home.png')} width="80%" />
                    </div>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/5 sm:w-1/2 w-full fitur mr-4 mt-5 ml-5 sm:ml-5 md:ml-10 lg:ml-24">
                            <div className="tim">
                                <span class="iconify mt-1" data-icon="bi:clock-fill" data-inline="false" style={{ color: 'white' }} width="47px"></span>
                                <p className="leading-relaxed mt-4 text-white"><b>Bekerja waktu nyata</b></p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/5 sm:w-1/2 w-full fitur mr-4 mt-5 ml-5">
                            <div className="tim">
                                <span class="iconify mt-1" data-icon="emojione-monotone:globe-showing-americas" data-inline="false" style={{ color: 'white' }} width="47px"></span>
                                <p className="leading-relaxed mt-4 text-white"><b>Bekerja dimanapun </b></p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/5 sm:w-1/2 w-full fitur mr-4 mt-5 ml-5">
                            <div className="tim">
                                <span class="iconify mt-1" data-icon="whh:tasks" data-inline="false" style={{ color: 'white' }} width="47px"></span>
                                <p className="leading-relaxed mt-4 text-white"><b>Tetap Produktif</b></p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/5 sm:w-1/2 w-full fitur mr-4 mt-5 ml-5">
                            <div className="tim">
                                <span class="iconify mt-1" data-icon="bi:eye-fill" data-inline="false" style={{ color: 'white' }} width="47px"></span>
                                <p className="leading-relaxed mt-4 text-white"><b>Lacak dengan bukti</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}