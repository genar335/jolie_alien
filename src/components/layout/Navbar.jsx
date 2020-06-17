import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { useTransition, useSpring, animated } from 'react-spring'
import '../layoutStyles/Navbar.scss'

function Navbar(props) {
   
    const [burgerState, setBurgerState] = useState(false)


    // animation for burger icon rotation
    const { degree } = useSpring({
        from: { degree: 0 },
        degree: burgerState ? 360 : 0
    })

    // animation settings for 
    // burger insides appearance
    const transitionForOpacity = useTransition(burgerState, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })
    

    return(
        <div className="navbar-container" >
            <h1 id="site-name" >The Name</h1>
            <animated.div 
                id="burger-container"
                style={{
                    transform: degree.interpolate(degree => rotate(${degree}deg)),
                    opacity: 1
                }}
            >
                <MenuRoundedIcon
                    id="burger-icon"
                    style={{ 
                        zIndex: 2,
                        margin: "1.5rem 1.25rem 0 0",
                        width: "2rem",
                        height: "2rem"
                    }}
                    onClick={() => setBurgerState(!burgerState)}
                />
            </animated.div>
            {transitionForOpacity.map(({item, key, props}) => (
                item && 
                    <animated.div 
                        id="link-container"
                        style={props}
                    >
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/faq">F.A.Q.</Link>
                    </animated.div>
            ))}
            
        </div>
    )
}

export default Navbar