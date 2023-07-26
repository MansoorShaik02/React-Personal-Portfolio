//rfce to generate a react snippet
import React from 'react'
import "../Styles/Home.css"

function Home() {
    return (
        <div className="Bio">
            <div className="NameIntro"><h2>Hi,This is Shaik Mansoor Ahamed</h2></div>
            <div className="profileline"><p>Motivated and Enthusiastic Software Engineering Student with a strong interest to learn new Technologies.
            </p></div>
            <div className="SkillsTitle"><h1>Skills</h1></div>
            <div className="Skills"><span>React,</span>
                <span> HTML, CSS, Git</span></div>
            <div className="LanguagesTitle"><h2>Languages</h2></div>
            <div className="Languages"><p>Java, JavaScript</p></div>


        </div>
    )
}

export default Home
