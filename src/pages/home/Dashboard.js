import { Link } from 'react-router-dom';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function DashboardPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="pt-64 sm:pt-56 md:pt-40 lg:pt-16 dashboard">
            <div className="Pilih flex justify-evenly mt-16 ml-10 sm:ml-0 md:ml-0 lg:ml-0">
                <Link to="/dashboard" className="tbl mt-6 sm:mt-0 md:mt-0 lg:mt-0" onClick={() => setShowModal(true)}>
                    Start</Link>

                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Start Project
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}>
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Pilih Projek</option>
                                            <option>Projek 1</option>
                                            <option>Projek 2</option>
                                            <option>Projek 4</option>
                                            <option>Projek 5</option>
                                            <option>Projek Baru</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                            onClick={() => setShowModal(false)}>
                                            Close
                                        </button>
                                        <button
                                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                            onClick={() => setShowModal(false)}>
                                            Ok
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                <div>
                    <div className="inline-block relative w-64 mx-8 mb-3">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Pilih Projek</option>
                            <option>Projek 1</option>
                            <option>Projek 2</option>
                            <option>Projek 4</option>
                            <option>Projek 5</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div className="inline-block relative w-64 mx-8 shadow rounded">
                        <DatePicker
                            className="border rounded-xl h-10 px-8 w-64"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            isClearable
                            placeholderText="Pilih Hari" />
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 kotak p-10 rounded-2xl shadow-lg">
                <div className="mt-5">
                    <ul className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        <li className="border p-5 rounded-xl h-50 w-max kotakDua shadow">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <div className="h-12 w-12 rounded-md">
                                        <span className="iconify" width="35px" data-icon="bi:clock-history" data-inline="false" style={{ color: '#04555C' }} />
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium mt-2">Waktu Tercatat Hari Ini</h4>
                                <p className="mt-2 text-base leading-6 ">
                                    12 Jam
                                </p>
                            </div>
                        </li>
                        <li className="mt-5 md:mt-0 border p-5 rounded-xl kotakDua shadow">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <div className="h-12 w-12 rounded-md">
                                        <span className="iconify" width="35px" data-icon="bx:bxs-edit" data-inline="false" style={{ color: '#04555C' }}></span>
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium mt-2">7 Hari Waktu Tercatat</h4>
                                <p className="mt-2 text-base leading-6 ">
                                    40 Jam
                                </p>
                            </div>
                        </li>
                        <li className="mt-5 md:mt-0 border p-5 rounded-xl kotakDua shadow">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <div className="h-12 w-12 rounded-md">
                                        <span className="iconify" width="35px" data-icon="icons8:todo-list" data-inline="false" style={{ color: '#04555C' }} />
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium mt-2">Rencana Terlaksana</h4>
                                <p className="mt-2 text-base leading-6 ">
                                    5/20
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="body-font">
                <div className="container px-5 my-10 mx-auto kotak rounded-xl shadow p-10">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full kotakDua shadow p-8 rounded-xl">
                                <h2 className="text-center text-3xl underline judul">Waktu Kerja Tim</h2>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="emojione:blond-haired-person-light-skin-tone" data-inline="false" />
                                    <p className="leading-relaxed mt-2">Faqih Zada</p>
                                    <p className="leading-relaxed mt-2">8 Jam</p>
                                </div>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="emojione:blond-haired-person-light-skin-tone" data-inline="false" />
                                    <p className="leading-relaxed mt-2">Ade Sug</p>
                                    <p className="leading-relaxed mt-2">8 Jam</p>
                                </div>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="emojione:person-frowning-light-skin-tone" data-inline="false" />
                                    <p className="leading-relaxed mt-2">Ziyan F</p>
                                    <p className="leading-relaxed mt-2">8 Jam</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full kotakDua shadow p-8 rounded-xl">
                                <h2 className="text-center text-3xl underline judul">Rencana Terlaksana</h2>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
                                    <p className="leading-relaxed mt-2">Membuat Logo</p>
                                </div>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
                                    <p className="leading-relaxed mt-2">Membuat Laporan</p>
                                </div>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
                                    <p className="leading-relaxed mt-2">Membuat Navbar</p>
                                </div>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
                                    <p className="leading-relaxed mt-2">Membuat Sidebar</p>
                                </div>
                                <div className="tim">
                                    <span className="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
                                    <p className="leading-relaxed mt-2">Memngecek Email</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}