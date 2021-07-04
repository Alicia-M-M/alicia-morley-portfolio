import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import SpinningButton from './SpinningButton';
import { useTrail, animated } from 'react-spring'
import { motion } from "framer-motion";
import Signature from './Signature'

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const itemPort = {

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

function RenderItems({ children }) {

    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, { opacity: 1, from: { opacity: 0 }, delay: 4000, },);
    return (

        <div className="col-12 text-center container">
            {trail.map((props, i) => (
                <animated.div style={props} key={i}>
                    {items[i]}
                </animated.div>
            ))}
        </div>

    );
}

function Landing() {
    const {itemList} = useContext(UserContext)
    const landingLayout = itemList.map(list => {
        return (
            <div key={itemList.id} className="container-fluid" style={{ color: 'white' }} >
                <div className='row'>
                    <div className="col-12 text-center mx-0 px-0">
                        <div style={{ backgroundImage: `url(${list.heroImage})`, backgroundPosition: 'center', backgroundSize: 'cover', color: 'white', height: '100vh', width: '100%', backgroundRepeat: 'no-repeat', position: 'relative' }}></div>
                        <div className="textOnImage">
                            <Signature />
                            <div className="textBelowSignature col-12 text-center px-0 pt-4">
                                <RenderItems>
                                    <h1>{list.title}</h1>
                                    <h5 className="pb-4">{list.description}</h5>
                                    <SpinningButton />
                                </RenderItems>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <motion.div
            variants={itemPort}
            transition={transition}
            initial="initial"
            animate="in"
            exit="out">
            {landingLayout}
        </motion.div>
    )

}

export default Landing;