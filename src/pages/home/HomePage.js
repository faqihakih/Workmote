import React from 'react';

export function HomePage() {
    // const name = "uzumaki bayu"
    return (
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Time Logged</h2>
                            <div className="flex justify-between">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mt-2">12 Hour</div>
                            </div>
                            {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p> */}
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">7 Days Logged</h2>
                            <div className="flex justify-between">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>

                                </div>
                                <div style={{ display: 'inline-block' }} className="mt-2">300 Hour</div>
                            </div>
                            {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p> */}
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Taks</h2>
                            <div className="flex justify-between">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx={6} cy={6} r={3} />
                                        <circle cx={6} cy={18} r={3} />
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                    </svg>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mt-2">13/20</div>
                            </div>
                            {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="border-2 rounded-lg border-gray-200">
                                <span class="inline-block py-1 px-3 rounded bg-green-100 text-green-500 text-sm font-medium tracking-widest">Team Logged</span>
                                <div className="flex p-3 sm:flex-row flex-col border-b-2 border-gray-600">
                                    <div className="w-10 h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                    </div>
                                    <div className="flex-grow flex justify-between mt-2">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3" style={{ display: "inline-block" }}>Udin</h2>
                                        <div style={{ display: "inline-block" }}>14 H</div>
                                    </div>
                                </div>
                                <div className="flex p-3 sm:flex-row flex-col border-b-2 border-gray-600">
                                    <div className="w-10 h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                    </div>
                                    <div className="flex-grow flex justify-between mt-2">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3" style={{ display: "inline-block" }}>Uzumaki Bayu</h2>
                                        <div style={{ display: "inline-block" }}>14 H</div>
                                    </div>
                                </div>
                                <div className="flex p-3 sm:flex-row flex-col">
                                    <div className="w-10 h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                    </div>
                                    <div className="flex-grow flex justify-between mt-2">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3" style={{ display: "inline-block" }}>Uchiha Roy</h2>
                                        <div style={{ display: "inline-block" }}>14 H</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">

                                <div className="Taks flex p-3 sm:flex-row flex-col border-b-2 border-gray-600">
                                    <div className="flex-growflex justify-between mt-2">
                                        <h2 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}