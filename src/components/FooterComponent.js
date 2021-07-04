import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";
const copyright = <FontAwesomeIcon icon={faCopyright} />
const github = <FontAwesomeIcon icon={faGithub} size="2x" />

const linkedin = <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="linkedIn" fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z" fill="green"/>
</svg>

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const itemFooter = {

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

function Footer() {
    return (
        <footer className="container-fluid text-center pt-5">
            <motion.div
                variants={itemFooter}
                transition={transition}
                initial="initial"
                animate="in"
                exit="out">
                <div className="row h-100">
                    <div className="col-10 mx-auto my-auto" style={{ maxWidth: '150px' }}>
                        <div className="row">
                            <div className="col-6"><a href="https://github.com/Alicia-M-M">{github}</a>
                            </div>
                            <div className="col-6"><a href='https://www.linkedin.com/in/alicia-morley-3ba99532/'>{linkedin}</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mx-auto pt-3 px-0">
                                <h6>{copyright}{" "}{new Date().getFullYear()} ALICIA MORLEY</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}

export default Footer;