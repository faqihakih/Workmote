import React /*, { useState }*/ from 'react';
import { TopNav } from '../components/TopNav';
import { TopNavHome } from '../components/TopNavHome';
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
                <Switch>
                    <Route exact path="/">
                        <TopNavHome />
                        <HomePage />
                    </Route>
                    <Route exact path="/login">
                        <TopNavHome />
                        <LoginPage />
                    </Route>
                    <Route exact path="/registration">
                        <TopNavHome />
                        <RegisPage />
                    </Route>
                    <Route exact path="/dashboard">
                        <TopNav />
                        <DashboardPage />
                    </Route>
                    <Route exact path="/timeTracker">
                        <TopNav />
                        <TimePage />
                    </Route>
                    <Route path="/taks">
                        <TopNav />
                        <BoardPage />
                    </Route>
                    <Route path="/conversation">
                        <TopNav />
                        <ConversationPage />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}