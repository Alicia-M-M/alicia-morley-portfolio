import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavLink, NavbarBrand } from 'reactstrap';
import AboutButton from './AboutButton';
import PortfolioButton from './PortfolioButton';
import DarkModeToggle from './DarkModeToggle';
import { motion } from "framer-motion";

const hamburger = <svg className="strokeChange" width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1H33M0 13H33M0 25H33" stroke="black" stroke-width="2"/>
</svg>

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const itemNav = {

    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },

};

function Navigation() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 1735;
    const collapse = 768;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <motion.div
                className="sticky"
                variants={itemNav}
                transition={transition}
                initial="initial"
                animate="in"
                exit="out"
            >
                <Navbar className={` py-4 ${windowWidth < breakpoint ? 'navWhite' : 'navTransparent'} `} expand="md">
                    <NavbarBrand>
                        <DarkModeToggle />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}>{hamburger}</NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto pr-4" navbar>
                            <NavItem className="text-left text-md-right pr-4">
                                {windowWidth >= collapse ?
                                    <PortfolioButton />
                                    : <NavLink className="pl-4 navlinkText" href="/portfolio/">PORTFOLIO</NavLink>
                                }
                            </NavItem>
                            <NavItem className="text-left text-md-right">
                                {windowWidth >= collapse ?
                                    <AboutButton />
                                    : <NavLink className="pl-4 navlinkText" href="/about/">ABOUT</NavLink>
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </motion.div>
        </>
    )
}

export default Navigation;