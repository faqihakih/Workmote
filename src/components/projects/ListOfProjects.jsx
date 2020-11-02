import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const ListOfProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const temp = []
        for(let i = 0; i< 150; i++){
            temp.push("Project "+ i.toString())
        }
        setProjects(temp)
    }, [])
    return (
        <div className="master">
            <input type="text" className="searchProject" placeholder="Search..."/>
            <div>
            {
                projects.map((project, i) => {
                    return (
                        <div className="pt-4">
                            <h4>{project}</h4>
                        </div>

                    )
                })
            }
            </div>

        </div>
    )
}