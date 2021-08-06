import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/images/logo.png'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [screen, setScreen] = useState(false);

    const openSidebar = () => {
        setToggle(true);
    };

    const closeSidebar = () => {
        setToggle(false);
    };

    useEffect(() => {
        const changeWidth = () => {
            if (window.innerWidth <= 928) {
                setScreen(true);
            } else {
                setScreen(false);
            }
        };

        changeWidth();
        window.addEventListener("resize", changeWidth);
    });
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="logo-sec">
                        <img src={logo} alt="etark-logo" />
                    </div>

                    <div className="main-nav">
                        <div className="nav-item">
                            <div className="item">
                                HOW TO USE
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="item">
                                ABOUT US
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="item">
                                CONTACT US
                            </div>
                        </div>
                    </div>
                    <div className="sec-nav">
                        <Button className="login-btn">LOGIN</Button>
                        <Button className="start-btn">GET STARTED</Button>
                    </div>
                    <MenuIcon className="menu-icon" onClick={openSidebar} />
                </div>
            </div>
            <div className="sidebar-container" style={{
                display: screen ? "block" : "none",
                right: toggle ? "-1px" : screen ? "-90%" : "-300px",

            }}>
                <div className="sidebar-wrapper">
                    <div className="sidebar-header">
                        <CloseIcon onClick={closeSidebar} className="close-icon" />
                    </div>
                    <Button onClick={closeSidebar} className="sidebar-link">
                        HOW TO USE
                    </Button>
                    <Button onClick={closeSidebar} className="sidebar-link">
                        ABOUT US
                    </Button>
                    <Button onClick={closeSidebar} className="sidebar-link">
                        CONTACT US
                    </Button>
                    <Button onClick={closeSidebar} className="sidebar-link side-login-btn">LOGIN</Button>
                    <Button onClick={closeSidebar} className="sidebar-link side-start-btn">GET STARTED</Button>
                </div>
            </div>
        </>
    )
}

export default Navbar
