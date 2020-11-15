import React, { useState } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export function TimePage() {
    const [startDate, setStartDate] = useState(new Date());
    const chartData = [
        {
            label: "Senin",
            value: "12"
        },
        {
            label: "Selasa",
            value: "10"
        },
        {
            label: "Rabu",
            value: "6"
        },
        {
            label: "Kamis",
            value: "6"
        },
        {
            label: "Jum'at",
            value: "8"
        },
        {
            label: "Sabtu",
            value: "2"
        },
        {
            label: "Minggu",
            value: "0"
        }
    ];


    const chartConfigs = {
        type: "column2d",
        width: "700",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "WorkStatic",
                numberSuffix: "Jam",
                theme: "fusion"
            },
            data: chartData
        }
    };

    return (
        <div className="pt-64 sm:pt-56 md:pt-40 lg:pt-20  time">
            <div className="flex justify-end m-5 text-black mb-10">
                <div class="inline-block relative w-40 sm:w-56 md:w-40 lg:w-64 mx-8">
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
                        className="border rounded-xl h-10 px-8 w-40 sm:w-56 md:w-40 lg:w-64"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        isClearable
                        placeholderText="Pilih Hari"
                    />
                </div>
            </div>

            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 mx-auto kartu w-5/6 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 overflow-auto">
                        <div className="w-full">
                            <ReactFC  {...chartConfigs} className="overflow-auto sm:overflow-auto md:overflow-auto lg:overflow-auto" />
                        </div>
                    </div>
                    <div class="p-4 mx-auto lg:w-1/3 md:w-full sm: w-full">
                        <div class="flex kotak shadow rounded-2xl p-4 sm:flex-row flex-col">
                            <div class="flex-grow kotakDua">
                                <h2 className="text-center text-3xl underline judulDua text-white mb-10">Waktu Kerja Tim</h2>
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
                    </div>

                </div>
            </div>

            <div className="kotak shadow rounded-2xl kontener">
                <h3 className="text-center text-black font-bold text-3xl">Hasil Tangkap Layar</h3>
                <div className="grid galery gap-4 text-black">
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 06.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 07.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 08.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 09.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 10.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 11.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 13.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 14.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 15.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 16.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 17.00</figcaption></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" />
                        <figcaption className="text-black text-center text-sm">pukul 18.00</figcaption></div>
                </div>
            </div>
        </div >
    )
}