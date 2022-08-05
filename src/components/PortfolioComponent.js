import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeButton from './HomeButton'

const download = <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.75 11L6.5 14M3 11L6.5 14M6.5 14L6.5 8" stroke="white" stroke-width="1.2" />
    <path d="M8.16667 4.78125V5.28125H8.66667H12.5V16.5H0.5V0.5H8.16667V4.78125Z" stroke="white" />
</svg>
const arrowRight = <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1L10.5 5.5M6 10.5L10.5 5.5M10.5 5.5H0.5" stroke="white" stroke-width="1.2" />
</svg>

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const itemPort = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
        scale: 0.5,
        opacity: 0,
        transition: { duration: 2, ...transition }
    }
};


const itemHeader = {

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

function RenderItemPort({ exampleItem, index }) {

    const overlayColour = exampleItem.overlay === 'darkGrey' ? 'overlayGrey' :
        exampleItem.overlay === 'yellow' ? 'overlayYellow' :
            exampleItem.overlay === 'pink' ? 'overlayPink' :
                'overlayLightGrey';


    const backgroundColour = exampleItem.overlay === 'darkGrey' ? 'backgroundGrey' :
        exampleItem.overlay === 'yellow' ? 'backgroundYellow' :
            exampleItem.overlay === 'pink' ? 'backgroundPink' :
                'backgroundLightGrey';

    const textColour = exampleItem.font === 'white' ? 'textWhite' :
        exampleItem.font === 'black' ? 'textWhite' : null;

    return (
        <>
            <motion.div variants={itemPort} >
                <div className="imageColourOverlay">
                    <Link className="cursor" to={`/image/${index}`}>
                        <div className={`${overlayColour}`}>
                            <motion.img
                                className="img-fluid"
                                src={exampleItem.img1}
                                alt={exampleItem.description}
                                transition={transition}
                            />
                        </div>
                        <div className="overlayPostion col-12 text-center py-3">
                            <h3 className={`${textColour} col-12 col-lg-8 mx-auto`}>{exampleItem.title}</h3>
                            <h6 style={{ width: '300px' }} className={`${textColour} text-center mx-auto col-10 col-xl-8`}>{exampleItem.description}</h6>
                            <div className="btn mainButton arrowButton cursor">{arrowRight}</div>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

const staggerItem = {
    exit: { transition: { staggerChildren: 0.2 } }
}

function Portfolio() {
    const {example} = useContext(UserContext)
    return (
        <>
            <div className="pagePbBg container-fluid test">
                <motion.div
                    variants={itemHeader}
                    transition={transition}
                    initial="initial"
                    animate="in"
                    exit="out">
                    <div className="row">
                        <div className="col-10 col-md-8 text-center pb-2 mx-auto textOverlayContainer">
                            <div className="pb-2">
                                <HomeButton />
                            </div>
                            <div className="textOnTop">
                                <h1>PORTFOLIO</h1>
                            </div>

                        </div>
                        <div className="col-12 pb-5 text-center">
                            <a className="btn mainButton downloadButton" href={"/assets/images/aliciaMorleyResume2022.pdf"} alt='resume' title="download my resume">{download}</a>
                        </div>
                    </div>
                </motion.div>
                <div className="container">
                    <div className="row">
                        <motion.div
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={staggerItem}
                        >
                            {example.map((exampleItem, index) => (
                                <div className="px-0 d-inline-block col-md-6 p-4">
                                    <RenderItemPort key={exampleItem.id} index={index} exampleItem={exampleItem} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;