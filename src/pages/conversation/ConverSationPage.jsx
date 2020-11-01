import React from 'react';
import { ConversationContainer } from '../../components/conversations/ConversationContainer';
import { ListOfProjects } from '../../components/projects/ListOfProjects';
import './ConversationStyles.css';

export function ConversationPage() {
    return (
        <div className="holder">
            <div className="myroot">
                <ListOfProjects/>
                <ConversationContainer/>
            </div>
        </div>

    )
}