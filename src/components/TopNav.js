import React from 'react';
import { Link } from 'react-router-dom';


export const TopNav = (/*{ loginStatus }*/) => {
    return (
        <header className="nav fixed w-full" style={{ zIndex: 1 }}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 pr-5 md:mb-0 md:border-r md:border-gray-600">
                    <Link to="/" className="ml-3 text-xl border-l">WM</Link>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/dashboard" className="mr-5 hover:text-white tbNav focus:text-white">
                        <span className="iconify inline-block mr-2" width="24px" data-icon="clarity:dashboard-line" data-inline="false"></span>Dashboard</Link>
                    <Link to="/timeTracker" className="mr-5 hover:text-white tbNav focus:text-white">
                        <span class="iconify inline-block mr-2" width="24px" data-icon="ant-design:field-time-outlined"
                            data-inline="false"></span>Time Tracker</Link>
                    <Link to="/taks" className="mr-5 hover:text-white tbNav focus:text-white"><span class="iconify inline-block mr-2" width="24px" data-icon="bi:list"
                        data-inline="false"></span>Taks</Link>
                    <Link to="/conversation" className="mr-5 hover:text-white tbNav focus:text-white"><span class="iconify inline-block mr-2" width="24px" data-icon="mdi:message-video"
                        data-inline="false"></span>Conversation</Link>
                </nav>
                <div className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
                    <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
                        {/* Heroicon name: bell */}
                        <span class="iconify" data-icon="clarity:notification-outline-badged" data-inline="false" data-width="25" data-height="25" style={{ color: '#04555C' }}></span>
                    </button>
                    <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
                        {/* Heroicon name: bell */}
                        <span className="iconify" data-icon="ant-design:logout-outlined" data-inline="false" data-width="25" data-height="25" style={{ color: '#04555C' }}></span>
                    </button>
                    {/* Profile dropdown */}
                    <div className="ml-3 relative">
                        <div>
                            <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                        </div>
                        {/*
Profile dropdown panel, show/hide based on dropdown state.

Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
*/}
                        {/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
        <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out</a>
        </div>
    </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}


