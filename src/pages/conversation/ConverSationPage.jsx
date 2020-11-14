import React from 'react';
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
        <div className="holder pt-64 sm:pt-56 md:pt-40 lg:pt-20">
            <div className="myroot">
                <ListOfProjects onSelected={onSelectedProject} selected={selectedProject} projects={projects} />
                <ConversationContainer selectedChat={selectedChat} />
                <div className="master">
                    <input type="text" className="searchProject rounded-xl px-4 py-1" placeholder="Search..." />
                    <div>
                        <div className="tim">
                            <span className="iconify" width="40px" data-icon="emojione:blond-haired-person-light-skin-tone" data-inline="false" />
                            <p className="leading-relaxed mt-2">Faqih Zada</p>
                            <p className="leading-relaxed mt-2"><div className="lingkaran"></div></p>
                        </div>
                        <div className="tim">
                            <span className="iconify" width="40px" data-icon="emojione:person-frowning-light-skin-tone" data-inline="false" />
                            <p className="leading-relaxed mt-2">Ziyan F</p>
                            <p className="leading-relaxed mt-2"><div className="lingkaran"></div></p>
                        </div>
                        <div className="tim">
                            <span className="iconify" width="40px" data-icon="gg:bot" data-inline="false" style={{ color: '#04555C' }} />
                            <p className="leading-relaxed mt-2">Steid-Bot</p>
                            <p className="leading-relaxed mt-2"><div className="lingkaran"></div></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}