import React, { useState } from 'react';
import Board from 'react-trello';
import { dummies } from './../../utils/data';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function BoardPage() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="pt-64 sm:pt-56 md:pt-40 lg:pt-16 sm:px-6 lg:px-24" >
            <div className="flex justify-end m-5 text-black mt-16">
                <div className="inline-block relative w-40 sm:w-56 md:w-40 lg:w-64 mx-8">
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
                <div className="inline-block relative w-36">
                    <DatePicker
                        className="border rounded-xl h-10 px-8 w-40 sm:w-56 md:w-40 lg:w-64"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        isClearable
                        placeholderText="Pilih Hari"
                    />
                </div>
            </div>
            <Board style={{ backgroundColor: '#E0E5EC' }} data={{ lanes: dummies }} />
        </div>
    )
}