import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Footer from './FooterComponent'
import About from './AboutComponent'
import Landing from './LandingPageComponent'
import Portfolio from './PortfolioComponent'
import Navigation from './NavigationComponent'
import ExampleOne from './ExampleOneComponent'
import { AnimatePresence } from "framer-motion";
import { UserContext, HERO, ABOUT, PORTFOLIOWORK } from '../UserContext';

const itemList = HERO;
const example = PORTFOLIOWORK;
const about = ABOUT;

const PortfolioPage = () => {
    return (
        <>
            <Navigation />
            <Portfolio />
            <Footer />
        </>
    )
}

const AboutPage = () => {
    return (
        <>
            <Navigation />
            <About />
            <Footer />
        </>
    )
}

const ExampleOnePage = ({ match }) => {
    return (
        <>
            <ExampleOne
                example={example.filter(example => example.id === +match.params.exampleId)[0]}
            />
            <Footer />
        </>
    )
}

function Main() {

    return (
        <>
            <Router>
                <UserContext.Provider value={{itemList, about, example}}>
                    <Route
                        render={({ location }) => (
                            <AnimatePresence exitBeforeEnter>
                                <Switch location={location} key={location.pathname}>
                                    <Route exact path="/home" component={Landing} />
                                    <Route exact path="/portfolio" component={PortfolioPage} />
                                    <Route path="/image/:exampleId" component={ExampleOnePage} />
                                    <Route exact path="/about" component={AboutPage} />
                                    <Redirect to="/home" />
                                </Switch>
                            </AnimatePresence>
                        )}
                    />
                </UserContext.Provider>
            </Router>

        </>
    )
}

export default Main;