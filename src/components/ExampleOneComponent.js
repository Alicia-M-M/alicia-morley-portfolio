import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />

const globe = <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6H17.5M1 13H17.5" stroke="white" />
    <circle cx="9.5" cy="9.5" r="9" stroke="white" />
    <path d="M12.5 9.5C12.5 12.0801 12.1139 14.3939 11.5057 16.0447C11.2009 16.872 10.8499 17.5065 10.4853 17.925C10.1198 18.3447 9.78535 18.5 9.5 18.5C9.21465 18.5 8.88021 18.3447 8.51467 17.925C8.15013 17.5065 7.79911 16.872 7.4943 16.0447C6.88613 14.3939 6.5 12.0801 6.5 9.5C6.5 6.91989 6.88613 4.60609 7.4943 2.95534C7.79911 2.128 8.15013 1.49347 8.51467 1.07496C8.88021 0.655304 9.21465 0.5 9.5 0.5C9.78535 0.5 10.1198 0.655304 10.4853 1.07496C10.8499 1.49347 11.2009 2.128 11.5057 2.95534C12.1139 4.60609 12.5 6.91989 12.5 9.5Z" stroke="white" />
</svg>

const arrowLeft = <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10.5L1.5 6M6 1L1.5 6M1.5 6L11.5 6" stroke="white" stroke-width="1.2" />
</svg>

const figma = <svg className="colourFill" width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM19.2 38.4C21.851 38.4 24 36.251 24 33.6V28.8H19.2C16.549 28.8 14.4 30.949 14.4 33.6C14.4 36.251 16.549 38.4 19.2 38.4ZM14.4 24C14.4 26.651 16.549 28.8 19.2 28.8H24V19.2H19.2C16.549 19.2 14.4 21.349 14.4 24ZM14.4 14.4C14.4 17.051 16.549 19.2 19.2 19.2H24V9.6H19.2C16.549 9.6 14.4 11.749 14.4 14.4ZM24 9.6V19.2H28.8C31.451 19.2 33.6 17.051 33.6 14.4C33.6 11.749 31.451 9.6 28.8 9.6H24ZM33.6 24C33.6 21.349 31.451 19.2 28.8 19.2C26.149 19.2 24 21.349 24 24C24 26.651 26.149 28.8 28.8 28.8C31.451 28.8 33.6 26.651 33.6 24Z" fill="none" />
</svg>

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const itemExample = {

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

function RenderExample({ example }) {
    return (
        <motion.div
            variants={itemExample}
            transition={transition}
            initial="initial"
            animate="in"
            exit="out">
            <div className="row h-100">
                <div className="col-1 px-0 my-auto">
                    <Link to="/portfolio" className="mainButton arrowButton btn text-center pb-1">{arrowLeft}</Link>
                </div>
                <div className="col-10 text-center my-auto mx-auto">
                    <h1 className="mb-0">{example.title}</h1>
                </div>
                <div className="col-1"></div>
                <div className="col-12 py-5 text-center"><a href={example.siteAdressWeb} target="_blank" rel="noopener noreferrer" className="mainButton btn globeButton" title="navigate to website">{globe}</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center col-sm-10 mx-auto text-md-left py-md-5 mb-4 pr-md-5">
                    <h3>{example.objectiveTitle}</h3>
                    <p className="mb-0">{example.objective}</p>
                </div>
                <div className="col-md-4 text-center col-10 mx-auto text-md-left py-md-5 mb-4 px-md-5">
                    <h3>{example.contributorsTitle}</h3>
                    {example.contributors.map((info) =>
                        <li style={{ listStyle: 'none' }}>{info}</li>
                    )}
                </div>
                <div className="col-md-4 text-center col-10 mx-auto  text-md-left py-md-5 mb-4 pr-md-5">
                    <h3>{example.programsTitle}</h3>
                    <p>{example.programs}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 order-1 mx-auto text-center text-md-left" >
                    <h3>{example.websiteTitle}</h3>
                    <a href={example.siteAdressWeb} target="_blank" rel="noopener noreferrer">
                        <img
                            className="img-fluid imgWidth"
                            src={example.img2} alt={example.title} /></a>
                </div>
                <div className="col-12 col-md-4 order-md-2 order-3 mx-auto pb-3 text-center text-md-left">
                    <h3>{example.htmlEmailTitle}</h3>
                    <a href={example.emailHtmlAdress} target="_blank" rel="noopener noreferrer">
                        <img
                            className="img-fluid imgWidth"
                            src={example.img3} alt={example.title} /></a>
                </div>
                <div className="col-12 mx-auto col-md-8 text-center text-md-left pt-2 pb-md-2 pb-5 order-md-3 order-2">
                    <div className="row">
                        <div className="col-12">
                            <p>{example.website}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-auto ml-md-0 text-center linksExamplePage" style={{ maxWidth: '200px' }}>
                            <div className="row">
                                <div className="col-4"><a href={example.siteAdressWeb} target="_blank" rel="noopener noreferrer" className="mainButton btn globeButton" title="navigate to website">{globe}</a></div>
                                <div className="col-4"><a className="cursor" href={example.siteAdressGit} target="_blank" rel="noopener noreferrer" alt={example.siteAdressWeb}>{github}</a></div>
                                <div className="col-4"><a className="cursor" href={example.siteFigma} alt={example.siteAddressWeb} target="_blank" rel="noopener noreferrer">{figma}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center col-12 mx-auto  text-md-left pt-2 pb-md-2 pb-5 order-4">
                    <div className="row">
                        <div className="col-12">

                            <p>{example.html}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-auto ml-md-0 text-center linksExamplePage" style={{ maxWidth: '200px' }}>
                            <div className="row">
                                <div className="col-4"><a href={example.emailHtmlAdress} className="mainButton btn globeButton" title="navigate to website" target="_blank" rel="noopener noreferrer">{globe}</a></div>
                                <div className="col-4"><a className="cursor" href={example.emailHtmlGit} alt={example.siteAdressWeb} target="_blank" rel="noopener noreferrer">{github}</a></div>
                                <div className="col-4"><a className="cursor" href={example.emailHtmlFigma} alt={example.siteAddressWeb} target="_blank" rel="noopener noreferrer">{figma}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

function ExampleOne({ example }) {
    if (example)
        return (
            <div className="container-fluid maxWidthContainer pagePb px-4 px-sm-5 pt-5">
                <RenderExample example={example} />
            </div>
        )
}

export default ExampleOne;