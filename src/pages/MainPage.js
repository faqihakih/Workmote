import React /*, { useState }*/ from 'react';
import { TopNav } from '../components/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardPage } from './home/Dashboard';
import { BoardPage } from './board/BoardPage';
import { HomePage } from './home/Home';
import { LoginPage } from './home/Login';
import { RegisPage } from './home/Regis';
import { TimePage } from './timeTracker/TimePage';
import { ConversationPage } from './conversation/ConverSationPage';

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
                <TopNav />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/registration">
                        <RegisPage />
                    </Route>
                    <Route exact path="/dashboard">
                        <DashboardPage />
                    </Route>
                    <Route exact path="/timeTracker">
                        <TimePage />
                    </Route>
                    <Route path="/taks">
                        <BoardPage />
                    </Route>
                    <Route path="/conversation">
                        <ConversationPage />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}