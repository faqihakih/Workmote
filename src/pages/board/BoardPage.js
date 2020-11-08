import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import { dummies } from './../../utils/data';
import * as UserService from './../../webservices/UserService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function BoardPage() {
    const [startDate, setStartDate] = useState(new Date());

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await UserService.fetchUsers()
        handleUsers(res)
    }

    const handleUsers = (datas) => {
        const cardA = []
        const cardB = []
        const cardC = []
        const cardD = []
        datas.forEach((element, i) => {
            const pivot = {}
            pivot['id'] = i
            pivot['title'] = element.name
            pivot['description'] = element.email
            pivot['label'] = '30 menit yang lalu'

            if (i % 2 === 0) {
                cardA.push(pivot)
            } else if (i % 2 === 1) {
                cardB.push(pivot)
            } else if (i) {
                cardC.push(pivot)
            } else {
                cardD.push(pivot)
            }
        });

        const listAllBoard = [
            {
                id: 1,
                title: 'Board Todo',
                label: 'Example A',
                cards: cardA
            },
            {
                id: 2,
                title: 'Board Doing',
                label: 'Example B',
                cards: cardB
            },
            {
                id: 3,
                title: 'Board Review',
                label: 'Example B',
                cards: cardC
            },
            {
                id: 4,
                title: 'Board Done',
                label: 'Example B',
                cards: cardD
            }
        ]
        setUsers(listAllBoard)
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <div className="pt-64 sm:pt-56 md:pt-40 lg:pt-16 sm:px-6 lg:px-24" >
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
            <Board style={{ backgroundColor: '#E0E5EC' }} data={{ lanes: dummies }} />
        </div>
    )
}