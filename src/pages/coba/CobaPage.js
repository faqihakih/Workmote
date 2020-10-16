import React, { useState } from 'react'

export function CobaPage({ data, changeData }) {
    const [user1, setUser1] = useState('')
    const [user2, setUser2] = useState('')

    const onSubmit = () => {
        changeData(user1, user2)
    }

    return (
        <div>
            <h1>Halaman Coba {data.user1} and {data.user2}</h1>
            <div className="col">
                <input className="col-md-12" onChange={(text) => setUser1(text.target.value)} type='text' />
                <input className="col-md-12" onChange={(text) => setUser2(text.target.value)} type='text' />
            </div>

            <button className="btn btn-primary" onClick={onSubmit}>Change parent</button>
        </div>
    )
}