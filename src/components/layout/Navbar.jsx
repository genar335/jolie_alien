import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { useTransition, useSpring, useTrail, animated, config } from 'react-spring'
import '../layoutStyles/Navbar.scss'

function Navbar() {
   
    const [burgerState, setBurgerState] = useState(false)

    const  [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => 
        setScrollPosition(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return window.removeEventListener('scroll', handleScroll)
    }, [])

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
    const listedLinks = [
        { name: 'Home', url: ''},
        { name: 'About', url: 'about'},
        { name: 'Courses', url: 'courses'} ,
        { name: 'Team', url: 'team'},
        { name: 'Contact', url: 'contact' }
    ]
    const Links = listedLinks.map(link => 
        <Link 
            to={`/${link.url}`}
            onClick={() => setBurgerState(!burgerState)}
            /* className="nav-link" */>
                {link.name}
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

    // adjusting class for navbar depending on location
    const classList = ["navbar-container"];
    classList.push(window.location.pathname.replace(/\//g, ""));

    return(
        <div className={classList.join(" ")} onScroll={handleScroll} >

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
                        height: "2rem",
                        color: "white"
                    }}
                    onClick={() => setBurgerState(!burgerState)} />

            </animated.div>

            {transitionForOpacity.map(({item, key, props}, i) => (
                item && 
                    <animated.div 
                        id="link-container"
                        key={i}
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
    );
}

export default Navbar