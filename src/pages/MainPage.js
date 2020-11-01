import React /*, { useState }*/ from 'react';
import { TopNav } from '../components/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardPage } from './home/Dashboard';
import { BoardPage } from './board/BoardPage';
import { MeetPage } from './meet/MeetPage';
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
                <div className="chain">
                <TopNav  />
                <div>
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
                    <Route path="/taks">
                        <BoardPage />
                    </Route>
                    <Route path="/conversation">
                        <ConversationPage />
                    </Route>
                </Switch>                    
                </div>

                </div>

            </Router>

        </div>
    )
}