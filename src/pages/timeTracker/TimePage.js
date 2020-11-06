import React, { useState } from "react";
import ReactDOM from "react-dom";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// Adding the chart and theme as dependency to the core fusioncharts
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

    // STEP 3 - Creating the JSON object to store the chart configurations
    const chartConfigs = {
        type: "column2d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                //Set the chart caption
                caption: "WorkStatic",
                numberSuffix: "Jam",
                //Set the theme for your chart
                theme: "fusion"
            },
            // Chart Data
            data: chartData
        }
    };

    return (
        <div className="pt-20 time">
            <div className="flex justify-end m-5 text-black">
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

            <div className="kontener px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-2/3 md:1/3 sm:overflow-auto">
                        <div className="w-2/3 m-8 flex justify-center">
                            <ReactFC  {...chartConfigs} className="rounded-2xl shadow-lg" />
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 mt-20">
                        <div className=" kotak shadow radius">
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

            <div className="kotak shadow rounded-2xl kontener">
                <h3 className="text-center text-black font-bold text-3xl">Hasil Tangkap Layar</h3>
                <div className="grid galery gap-4 text-black">
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                    <div className="item"><img src={require('./../../assets/img/ss.jpg')} width="100%" alt="logo" /></div>
                </div>
            </div>
        </div >
    )
}