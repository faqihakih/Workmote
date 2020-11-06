import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const ListOfProjects = ({ projects, selected = null, onSelected }) => {

    return (
        <div className="master">
            <input type="text" className="searchProject" placeholder="Search..."/>
            <div>
            {
                projects.map((project, i) => {
                    return (
                        <div onClick={() => onSelected(project)} key={i.toString()} className={ selected !== null && selected.id == project.id ? "projectItemSelected" : "projectItem"}>
                            <h4>{project.name}</h4>
                            <p>{project.description}</p>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}