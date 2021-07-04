import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import HomeButton from './HomeButton'
import { motion } from "framer-motion";
import Contact from "./ContactComponent"

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const itemAbout = {

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

const download = <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.75 11L6.5 14M3 11L6.5 14M6.5 14L6.5 8" stroke="white" stroke-width="1.2" />
    <path d="M8.16667 4.78125V5.28125H8.66667H12.5V16.5H0.5V0.5H8.16667V4.78125Z" stroke="white" />
</svg>

function RenderAbout({ about }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const splitList = 768;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log(window.innerWidth)
    return (
        <>
            <div className="row">
                <div className="col-10 col-md-8 text-center pb-2 mx-auto textOverlayContainer">
                    <div className="pb-2">
                        <HomeButton />
                    </div>
                    <div className="textOnTop">
                        <h1>ABOUT</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto pb-2 text-center"><p>{about.intro}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-8 mx-auto pb-5 text-center"><a className="btn mainButton downloadButton" href={"/assets/images/aliciaMorleyResume.pdf"} alt='resume' title="download my resume">{download}</a>
                </div>
            </div>
            <div className="row">
                <div className="col-6 text-right pl-0">
                    <h1>{about.titleFront}</h1>
                </div>
                <div className="col-6 text-left">
                    <h1>{about.titleDesign}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-right">
                    {about.frontend.map(info =>
                        <ul>
                            <li>{info}</li>
                        </ul>
                    )}
                </div>
                <div className="col-6 mx-auto text-left">
                    {about.design.map(info =>
                        <ul>
                            <li>{info}</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 mx-auto text-center pt-5 px-0">
                    <h1>{about.experience}</h1>
                    <>
                        {about.experienceList.map(info => {
                            const split = info.split("~")
                            const first = split[0];
                            const second = split[1];
                            return <ul>
                                {windowWidth < splitList ?
                                    <>
                                        <li>{first}</li>
                                        <li className="smallerFont">{second}</li>
                                    </>
                                    :
                                    <li className="sm">{first}<span className="smallerFont">{second}</span></li>
                                }
                            </ul>
                        })}
                    </>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-6 col-md-8 col-12 mx-auto pt-5" >
                    <h1>CONTACT</h1>
                    <p className="col-12 col-md-8 mx-auto">IT WOULD BE GREAT TO HEAR FROM YOU! <br></br>PLEASE CONTACT ME USING THE FORM BELOW.</p>
                    <Contact />
                </div>
            </div>
        </>
    )
}

function About() {
    const {about} = useContext(UserContext)
    const aboutItems = about.map((abouts, index) => {
        return (
            <RenderAbout key={abouts.id} index={index} about={abouts} />
        )
    });

    return (
        <div className="container-fluid pagePbBg maxWidthContainer aboutContainer px-5 mx-auto">
            <motion.div
                variants={itemAbout}
                transition={transition}
                initial="initial"
                animate="in"
                exit="out">
                {aboutItems}
            </motion.div>
        </div>
    )
}

export default About;