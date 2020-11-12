import React from 'react';
import { Link } from 'react-router-dom';


export const TopNavHome = (/*{ loginStatus }*/) => {
    return (
        <header className="nav fixed w-full" style={{ zIndex: 1 }}>
            <div className="container mx-auto flex p-5">
                <Link className="flex ml-auto title-font font-medium items-center">
                    <Link to="/" className="ml-3 text-xl border-l"><b>Home</b></Link>
                    <Link to="/login" className="ml-3 text-xl border-l"><b>Login</b></Link>
                    <Link to="/registration" className="ml-3 text-xl border-l"><b>Registration</b></Link>
                </Link>
            </div>
        </header>
    )
}


