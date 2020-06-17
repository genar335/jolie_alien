import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { useTransition, useSpring, useTrail, animated, config } from 'react-spring'
import '../layoutStyles/Navbar.scss'

function Navbar() {
   
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


    // returning array of links
    const listedLinks = ['', 'About', 'Courses', 'Team', 'Contact']
    const Links = listedLinks.map(link => 
        <Link 
            to={`/${link.toLowerCase()}`}
            onClick={() => setBurgerState(!burgerState)}
            /* className="nav-link" */>
                {link}
        </Link>
    )

    // animation for  
    // appearance of links
    const config = { mass: 5, tension: 4000, friction: 150 }
    const appearanceOfLinks = useTrail(Links.length, {
        opacity: burgerState ? 1 : 0,
        x: burgerState ? 0 : 200,
        from: { 
            x: 200,
            opacity: 0
        },
        config
    })
    

    return(
        <div className="navbar-container" >

            <h1 id="site-name" >The Name</h1>

            <animated.div 
                id="burger-container"
                style={{
                    transform: degree.interpolate(degree => `rotate(${degree}deg)`),
                    opacity: 1
                }}>

                <MenuRoundedIcon
                    id="burger-icon"
                    style={{ 
                        zIndex: 2,
                        margin: "1.5rem 1.25rem 0 0",
                        width: "2rem",
                        height: "2rem"
                    }}
                    onClick={() => setBurgerState(!burgerState)} />

            </animated.div>

            {transitionForOpacity.map(({item, key, props}) => (
                item && 
                    <animated.div 
                        id="link-container"
                        style={props}>   
                            <div id="links">
                                {appearanceOfLinks.map(({x, ...rest}, index) => (
                                    <animated.div 
                                        style={{...rest,
                                            transform: x.interpolate(x => `translate(${x}px, 0px)`)
                                        }}
                                        key={Links[index]}
                                        className="nav-link-container">
                                            {Links[index]}
                                        
                                    </animated.div>
                                ))}
                            </div>
                    </animated.div>
            ))}
            
        </div>
    )
}

export default Navbar