import React, { useState } from 'react';
import { TopNav } from '../components/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { BoardPage } from './board/BoardPage';
import { AboutPage } from './about/AboutPage';
import { CobaPage } from './coba/CobaPage';

export default function MainPage() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [user, setUser] = useState({
    //     user1: '',
    //     user2: ''
    // })


    // const changeData = (person1, person2) => {
    //     setUser({ ...user, user1: person1, user2: person2 })
    //     setIsLoggedIn(!isLoggedIn)
    // }


    return (
        <div>
            <Router>
                <TopNav /*loginStatus={isLoggedIn}*/ />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/board">
                        <BoardPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/coba">
                        <CobaPage /*data={user} changeData={changeData} */ />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}