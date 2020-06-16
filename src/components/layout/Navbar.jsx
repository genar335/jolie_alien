import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
//import Link from '@material-ui/core/Link'
import '../layoutStyles/Navbar.scss'

function Navbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = e => 
        setAnchorEl(e.currentTarget)

    const handleClose = () => 
        setAnchorEl(null)

    return(
        <div className="navbar-container" >
            <h1 id="site-name" >Name of the thingy</h1>
            <Button 
                aria-controls="simple-menu" 
                aria-haspopup 
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <Menu 
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/about">About</Link>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar