import React from 'react';

export const ListOfProjects = ({ projects, selected = null, onSelected }) => {

    return (
        <div className="master">
            <input type="text" className="searchProject rounded-xl px-4 py-1" placeholder="Search..." />
            <div>
                {
                    projects.map((project, i) => {
                        return (
                            <div onClick={() => onSelected(project)} key={i.toString()} className={selected !== null && selected.id === project.id ? "projectItemSelected" : "projectItem"}>
                                <h4 className="flex justify-center">{project.name}</h4>
                                {/* <p>{project.description}</p> */}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}