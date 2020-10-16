import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import { dummies } from './../../utils/data';
import * as UserService from './../../webservices/UserService';

export function BoardPage() {
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
        <div style={{ backgroundColor: '#3179ba' }}>
            <Board className="container mx-auto" data={{ lanes: dummies }} />
        </div>
    )
}