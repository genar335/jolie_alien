import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { useTransition, useSpring, useTrail, animated, config } from 'react-spring'
import '../layoutStyles/Navbar.scss'

const listedLinks = [
    { name: 'ХОПЛЯ', url: 'about'},
    { name: 'Курсы', url: 'courses'} ,
    { name: 'Команда', url: 'team'},
    { name: 'Контакты', url: 'contact' }
]

function Heading({url}) {
    console.log(url);
    return (
        <h1 className="site-name">
            {
            (listedLinks.find(link => link.url === url) || {name: "not found"}).name
            }
        </h1>
    )
}

function Navbar() {
   
    const [burgerState, setBurgerState] = useState(false)
    const [navPosition, setNavPosition] = useState(0)

    // scrolling, hackyAF
    let prevScroll = window.pageYOffset
    const handleScroll = (e) => {
        //console.log(window.scrollY)
        
        if (prevScroll > window.pageYOffset) {
            setNavPosition(0) 
            if (document.getElementById('link-container')) {
                document.getElementById('link-container').style.marginTop = "0rem"
                console.log('up')
            }
        } else {
            setNavPosition(-10)
            if (document.getElementById('link-container')) {
                document.getElementById('link-container').style.marginTop = "10rem"
                console.log('up')
            }
        }
        prevScroll = window.pageYOffset
    }

    useEffect(() => {
        window.addEventListener('scroll', (() => handleScroll() ))
        return window.removeEventListener('scroll', function(e) { console.log(123) })
    }, [null])

    

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
    const url = window.location.pathname.replace(/\//g, "")
    classList.push(url);

    return(
        <div 
            className={classList.join(" ")} 
            style={{
                top: `${navPosition}rem`
            }}
            >
        
            <Heading url={url} />

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
                        //color: "white"
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