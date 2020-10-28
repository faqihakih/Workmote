import React /*, { useState }*/ from 'react';
import { TopNav } from '../components/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardPage } from './home/Dashboard';
import { BoardPage } from './board/BoardPage';
import { MeetPage } from './meet/MeetPage';
import { TimePage } from './timeTracker/TimePage';

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
                        <DashboardPage />
                    </Route>
                    <Route exact path="/dashboard">
                        <DashboardPage />
                    </Route>
                    <Route exact path="/timeTracker">
                        <TimePage />
                    </Route>
                    <Route path="/board">
                        <BoardPage />
                    </Route>
                    <Route path="/meet">
                        <MeetPage />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}