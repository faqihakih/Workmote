import { Link } from 'react-router-dom';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function DashboardPage() {
    // const name = "uzumaki bayu"
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="pt-16 dashboard">
            <div className="Pilih flex justify-evenly mt-16">
                <Link to="/dashboard" className="tbl">
                    Start</Link>
                <div>
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
                    <div className="inline-block relative w-36 shadow rounded">
                        <DatePicker
                            className="border rounded-xl h-10 px-8"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            isClearable
                            placeholderText="Pilih Hari"
                        />
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
                                        {/* Heroicon name: globe-alt */}
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
                                        {/* Heroicon name: globe-alt */}
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
                                        {/* Heroicon name: globe-alt */}
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
                <div className="container px-5 my-10 mx-auto kotak shadow">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full kotakDua shadow p-8 rounded">
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
                            <div className="h-full kotakDua shadow p-8 rounded">
                                <h2 className="text-center text-3xl underline judul">Rencana Terlaksana</h2>
                                <div className="tim">
                                    <span class="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
                                    <p className="leading-relaxed mt-2">Membuat Logo</p>
                                </div>
                                <div className="tim">
                                    <span class="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
                                    <p className="leading-relaxed mt-2">Membuat Laporan</p>
                                </div>
                                <div className="tim">
                                    <span class="iconify" width="40px" data-icon="ic:baseline-done" data-inline="false" style={{ color: '#04555C' }}></span>
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