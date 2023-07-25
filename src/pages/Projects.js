import React from 'react'
import ProjectItem from './ProjectItem'
import { projectList } from "../helpers/ProjectList"

import '../Styles/Projects.css'

function Projects() {
    return (
        <div className='projectscomplete'>

            {projectList.map((item) => {
                return <ProjectItem projectname={item.projectname} image={item.image} link={item.link} />
            })}


            <div className='ProjectList'></div>
        </div>
    )
}

export default Projects