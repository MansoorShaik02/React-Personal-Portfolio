import React from 'react'
import "../Styles/Socials.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



function Socials() {
    return (
        <div className="Socialmedia">
            <a href='https://www.linkedin.com/in/shaik-mansoor-ahamed-73468124a/'> <LinkedInIcon />

            </a>
            <a href="https://github.com/MansoorShaik02"><GitHubIcon /></a>
            <a href="mailto:mansoorshaik7b@gmail.com"><MailOutlineIcon /></a></div>
    )
}

export default Socials