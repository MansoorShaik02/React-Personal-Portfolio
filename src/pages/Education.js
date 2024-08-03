import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import "../Styles/Education.css"

function Education() {
    return (
        <div className='Education'><VerticalTimeline lineColor='#3e497a'><VerticalTimelineElement className='vertical-timeline-element--education' date='2020-2024
        ' iconStyle={{ background: "#3e497a", color: "white" }} icon={<SchoolIcon></SchoolIcon>}><h3 className='vertical-timeline-element-title'>GITAM University,Vizag</h3>
            <p>B.Tech CSE</p>
            <p>Graduated with a CGPA : 7.67</p></VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2020
        ' iconStyle={{ background: "#3e497a", color: "white" }} icon={<SchoolIcon></SchoolIcon>}><h3 className='vertical-timeline-element-title'>Sri Gayathri Junior College,Hyderabad</h3>
                <p>Intermediate</p>
                <p>87.90%</p></VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2018
        ' iconStyle={{ background: "#3e497a", color: "white" }} icon={<SchoolIcon></SchoolIcon>}><h3 className='vertical-timeline-element-title'>Saint Augustine High School,Hyderabad</h3>
                <p>10th</p>
                <p>GPA : 8.8</p></VerticalTimelineElement></VerticalTimeline>
        </div >
    )
}

export default Education