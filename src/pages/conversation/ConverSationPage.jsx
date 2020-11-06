import React, { useEffect } from 'react';
import { ConversationContainer } from '../../components/conversations/ConversationContainer';
import { ListOfProjects } from '../../components/projects/ListOfProjects';
import './ConversationStyles.css';
import projectsData from './../../assets/projects.json';
import chatsData from './../../assets/chats.json';
import { useState } from 'react';

export function ConversationPage() {
    const [selectedProject, setSelectedProject] = useState(projectsData.projects[0])
    const [selectedChat, setSelectedChat] = useState(chatsData[0])
    const [projects, setProjects] = useState(projectsData.projects)

    const onSelectedProject = (p) => {
        setSelectedProject(p)
        setSelectedChat(chatsData.find((e) => e.id_project === p.id))
    }

    return (
        <div className="holder">
            <div className="myroot">
                <ListOfProjects onSelected={onSelectedProject} selected={selectedProject} projects={projects}/>
                <ConversationContainer selectedChat={selectedChat}/>
            </div>
        </div>

    )
}