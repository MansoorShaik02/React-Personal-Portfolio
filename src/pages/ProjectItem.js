import React from 'react'
import '../Styles/ProjectItem.css'

function ProjectItem(props) {
    return (


        <div class="projectitem">
            <a href={props.link}>
                <img src={props.image} className='projectitemimage'></img>
                <h2 className='projectTitle'>{props.projectname}</h2>


            </a>
        </div>
    )
}

export default ProjectItem