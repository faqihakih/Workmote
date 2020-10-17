import React from 'react';

export function HomePage() {
    // const name = "uzumaki bayu"
    return (
        <div className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="mt-5">
                    <ul className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        <li className="border p-5 rounded h-24">
                            <div className="flex justify-around">
                                <div className="flex-shrink">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                                        {/* Heroicon name: globe-alt */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium text-gray-900 mt-2">Time Logged</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    12 H
                    </p>
                            </div>
                        </li>
                        <li className="mt-5 md:mt-0 border p-5 rounded">
                            <div className="flex justify-around">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                                        {/* Heroicon name: scale */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-md leading-6 font-medium text-gray-900 mt-2">7 Days Logged</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    40 H
                    </p>
                            </div>
                        </li>
                        <li className="mt-5 md:mt-0 border p-5 rounded">
                            <div className="flex justify-around">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                                        {/* Heroicon name: lightning-bolt */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
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

            <div class="container py-10 mx-auto mx-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

                <div className="border rounded p-5 md:mr-5">
                    <h2 class="font-medium inline-block title-font tracking-widest bg-green-100 text-green-500 mb-4 text-sm text-center sm:text-left">TEAM TIMES</h2>
                    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Faqih</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                20 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Ade</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                20 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Ziyan</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                18 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Satria</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                22 H
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Ryan</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                15 H
                    </p>
                        </div>
                    </nav>
                </div>

                <div className="border rounded p-5">
                    <h2 class="font-medium inline-block title-font tracking-widest bg-green-100 text-green-500 mb-4 text-sm text-center sm:text-left">TAKS</h2>
                    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Memperbaiki Bug</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Cek Email</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Belajar Web</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </a>
                                <h4 className="text-md leading-6 font-medium text-gray-900 inline">Memperbaiki Tampilan</h4>
                            </div>
                            <p className="text-base leading-6 text-gray-500">
                                Today
                    </p>
                        </div>
                        <div className="flex justify-between px-10 mb-2 border-b w-full">
                            <div className="flex-shrink-0 inline">
                                <a class="mb-2 inline">
                                    <span class="bg-indigo-100 bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="bg-green-100 text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </span>
                                </a>
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