import { Link } from 'react-router-dom';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function HomePage() {
    // const name = "uzumaki bayu"
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="py-20 bg-white">

            <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 bg-green-500 p-10 rounded-2xl">
                <div className="Pilih flex justify-end">
                    <div class="inline-block relative w-64 mx-8">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Pilih Projek</option>
                            <option>Projek 1</option>
                            <option>Projek 2</option>
                            <option>Projek 4</option>
                            <option>Projek 5</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div class="inline-block relative w-36">
                        <DatePicker
                            className="border rounded-xl h-10 px-8"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            isClearable
                            placeholderText="Pilih Hari"
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <ul className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        <li className="border p-5 rounded-xl h-24 bg-white">
                            <div className="flex justify-around ">
                                <div className="flex-shrink">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                                        {/* Heroicon name: globe-alt */}
                                        <span class="iconify w-10 h-10" data-icon="bx:bxs-time" data-inline="false"></span>
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium text-gray-900 mt-2">Time Logged</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    12 H
                                </p>
                            </div>
                        </li>
                        <li className="mt-5 md:mt-0 border p-5 rounded-xl bg-white">
                            <div className="flex justify-around">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                                        {/* Heroicon name: scale */}
                                        <span class="iconify w-10 h-10" data-icon="bx:bxs-time-five" data-inline="false"></span>
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium text-gray-900 mt-2">7 Days Logged</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    40 H
                    </p>
                            </div>
                        </li>
                        <li className="mt-5 md:mt-0 border p-5 rounded-xl bg-white">
                            <div className="flex justify-around">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                                        {/* Heroicon name: lightning-bolt */}
                                        <span class="iconify w-10 h-10" data-icon="icons8:todo-list" data-inline="false"></span>
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium text-gray-900 mt-2">Taks</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    12/20
                    </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="px-20 py-10 mx-auto mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 bg-green-500 rounded-t-3xl">
                <div className="border rounded-2xl p-5 md:mr-5 bg-white">
                    <h2 class="font-medium inline-block title-font tracking-widest bg-green-100 text-green-500 mb-4 text-sm text-center sm:text-left">TEAM TIMES</h2>
                    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Faqih</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                20 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Ade</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                20 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Ziyan</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                18 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Satria</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                22 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Ryan</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                15 H
                    </p>
                        </div>
                    </nav>
                </div>

                <div className="border rounded-2xl p-5 bg-white">
                    <h2 class="font-medium inline-block title-font tracking-widest bg-green-100 text-green-500 mb-4 text-sm text-center sm:text-left">TAKS</h2>
                    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Memperbaiki Bug</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Cek Email</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Belajar Web</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Memperbaiki Tampilan</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <Link class="mb-2 inline">
                                    <span class="bg-indigo-100 bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Kirim Tugas</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}