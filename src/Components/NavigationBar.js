import { React, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import "../Styles/NavigationBar.css"
import ReorderIcon from '@material-ui/icons/Reorder'
import { useState } from 'react'

function NavigationBar() {


    const [navbarexpansion, setnavbarexpansion] = useState(false)
    const location = useLocation();


    useEffect(() => {
        setnavbarexpansion(false);
    }, [location]);


    return (
        <div className='navbardiv' id={navbarexpansion ? "open" : "close"}>
            <div className='hamburgermenu'>
                <button onClick={() => { setnavbarexpansion((prev) => !prev) }}><ReorderIcon /></button>
            </div>
            <div className='navbarlinks'>

                <Link to="/">Home</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Education">Education</Link>
            </div>
        </div>
    )
}

export default NavigationBar