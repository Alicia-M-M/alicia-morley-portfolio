import { createContext } from 'react';

export const HERO = [
    {
        id: 0,
        title: 'DIGITAL DESIGNER/DEVELOPER',
        description: 'ADOBE CC FIGMA HTML CSS JS REACT BOOTSTRAP',
        heroImage: '/assets/images/geoLandingImageV1.jpg'
    },
]


export const ABOUT = [

    {
        id: 0,
        intro: 'I am a digital marketing designer/developer who is proficient with Photoshop, Illustrator, After Effects, Figma and Sketch. I have extensive experience using e-commerce platforms Mailchimp, Shopify and Amazon Store Fronts. I have also recently expanded my skill set to include HTML, CSS, SASS, JS, React, Redux, Reactstrap and Bootstrap for web development. When working on a project I am completely dedicated and enthusiastic! I’m a great communicator and I enjoy working in a team environment.',
        titleFront: 'DEVELOPMENT',
        frontend: ['HTML', 'CSS', 'JS', 'REACT', 'BOOTSTRAP', 'REACTSTRAP', 'GITHUB', 'MAILCHIMP', 'SHOPIFY', 'AMAZON STORE FRONTS'],
        titleDesign: 'DESIGN',
        design: ['FIGMA', 'SKETCH', 'ADOBE PHOTOSHOP', 'ADOBE ILLUSTRATOR', 'ADOBE AFTER EFFECTS','ADOBE INDESIGN', 'MAILCHIMP', 'SHOPIFY', 'AMAZON STORE FRONTS'],
        experience: 'EDUCATION & EXPERIENCE',
        experienceList: ['DIGITAL PRODUCTION DESIGNER ~- KATE SPADE NEW YORK, MARCH 2022 - PRESENT','DIGITAL DESIGNER ~- 90 DEGREE BY REFLEX, OCT 2021 - MARCH 2022','15 YEARS GRAPHIC DESIGN ~- VARIOUS COMPANIES GLOBALLY','FULLSTACK BOOTCAMP 2020 ~- NUCAMP CALIFORNIA, USA', 'BA HONS TEXTILE DESIGN ~- CHELSEA COLLEGE OF ART, LONDON UK',],
        linkedInGeneral: 'https://www.linkedin.com/in/alicia-morley-3ba99532/',
        githubGeneral: 'https://github.com/Alicia-M-M'
    }
]

export const PORTFOLIOWORK = [
    {
        id: 0,
        title: '90 DEGREES BY REFLEX',
        description: 'ADOBE PHOTOSHOP SHOPIFY MAILCHIMP HTML',
        img1: '/assets/images/90DegreeFrontV1.jpg',
        titleExample: '90 DEGREES BY REFLEX',
        objectiveTitle: 'ROLE DESCRIPTION',
        objective: 'During my role at 90 Degree by reflex website I created bi-weekly Shopify and Mailchimp graphics. I used photoshop for the graphics and photo editing and updated the platform adding assets and text for products and descriptions.',
        contributorsTitle: 'CONTRIBUTORS',
        contributors: ['Website Development: Alicia Morley', 'Website Design: Alicia Morley', 'HTML Email Design: Alicia Morley', 'HTML Email Development: Alicia Morley', 'Images: 90 Degree Photography,Unsplash, Pexels'],
        programsTitle: 'DESIGN & DEVELOPMENT',
        programs: 'Adobe Photoshop, Shopify, Mailchimp, HTML',
        websiteTitle: 'WEBSITE',
        website: "For the bi-weekly design layouts for the banners I created a theme for each promotion. I used a consistant text in various weights of Poppins for the button and secondary information and then chose a dynamic header font to distinguish the separate campaigns. For the colour selection I used complimentary colours to the Lifestyle photography and considered WCAG standards for accessibility when placing text over backgrounds. For the overall placement I considered the UI, how the graphics flowed and the promotional information leading to the ‘shop now’ button for a user friendly experience. I also photo edited the images depending on the layout of the graphic by extending background scenery, adding a new relevant garment to a model in a lifestyle shot or colour change a garment in-line with stock availability.",
        siteAdressWeb: 'https://www.figma.com/proto/2vEQFhxIiWlTbRWSytoQHM/90DegreeWeb?page-id=0%3A1&node-id=0%3A1&viewport=241%2C48%2C0.13&scaling=scale-down-width&starting-point-node-id=2%3A2',
        siteAdressGit: 'None',
        siteFigma: 'https://www.figma.com/proto/2vEQFhxIiWlTbRWSytoQHM/90DegreeWeb?page-id=0%3A1&node-id=0%3A1&viewport=241%2C48%2C0.13&scaling=scale-down-width&starting-point-node-id=2%3A2',
        htmlEmailTitle: 'HTML EMAIL',
        html: 'The bi-weekly email campaign always mirrored the online promotion. I scaled and exported the graphics for web optimization to improve loading speed. I chose the products displayed under the main banner images depending on the current price promotion whilst also checking stock availability on Shopify.',
        emailHtmlAdress: 'https://www.figma.com/proto/Coi901RWg4vwnJywnTnqfJ/90Degree?page-id=0%3A1&node-id=3%3A14&viewport=241%2C48%2C0.57&scaling=scale-down-width',
        emailHtmlGit: 'None',
        emailHtmlFigma: 'https://www.figma.com/proto/Coi901RWg4vwnJywnTnqfJ/90Degree?page-id=0%3A1&node-id=3%3A14&viewport=241%2C48%2C0.57&scaling=scale-down-width',
        img2: '/assets/images/90DegreeLayoutExampleV1.jpg',
        img3: '/assets/images/90DegreeEmailV1.jpg',
        overlay: 'darkGrey',
        font: 'white',
    },
    {
        id: 1,
        title: 'YOGALICIOUS',
        description: 'ADOBE PHOTOSHOP SHOPIFY MAILCHIMP HTML',
        img1: '/assets/images/yogaliciousExampleFrontV2.jpg',
        titleExample: 'YOGALICIOUS',
        objectiveTitle: 'ROLE DESCRIPTION',
        objective: 'I created Yogalicious bi-weekly Shopify and Mailchimp graphics and banners using photoshop. I updated the platform adding assets and text for products and descriptions. I also scheduled the email send outs and published the website.',
        contributorsTitle: 'CONTRIBUTORS',
        contributors: ['Website Development: Alicia Morley', 'Website Design: Alicia Morley', 'HTML Email Design: Alicia Morley', 'HTML Email Development: Alicia Morley', 'Images:Yogalicious Photography, Unsplash, Pexels'],
        programsTitle: 'DESIGN & DEVELOPMENT',
        programs: 'Adobe Photoshop, Shopify, Mailchimp, HTML',
        websiteTitle: 'WEBSITE',
        website: 'For the bi-weekly design layouts for the banners I created a theme for each promotion. I used a consistant text in various weights of Poppins for the button and secondary information and then chose a dynamic header font to distinguish the separate campaigns. For the colour selection I used complimentary colours to the Lifestyle photography and consider WCAG standards for accessibility when placing text over backgrounds. For the overall placement I considered the UI, how the graphics flowed and the promotional information leading to the ‘shop now’ button for a user friendly experience. I also photo edited the images depending on the layout of the graphic by extending background scenery, adding a new revelvant garment to a model in a lifestyle shot or colour changed a garment in-line with stock availability.',
        emailHtmlAdress: 'https://www.figma.com/proto/lZiNYwaMy0bVgDDTuwKPld/YogaliciousEmail?page-id=0%3A1&node-id=2%3A2&viewport=241%2C48%2C1.83&scaling=scale-down-width',
        siteAdressWeb: 'https://yogalicious.com/',
        siteAdressGit: 'None',
        siteFigma: 'https://www.figma.com/proto/WykRZDwi7HTBVdcSVNQ5sU/YogaliciousWeb?page-id=0%3A1&node-id=2%3A11&viewport=241%2C48%2C0.52&scaling=scale-down-width',
        htmlEmailTitle: 'HTML EMAIL',
        html: 'The bi-weekly email campaign mirror the online promotion. I scaled and exported the graphics for web optimization to improve loading speed. I chose the products displayed under the main banner images depending on the current price promotion whilst also checking stock availability on Shopify.',
        emailHtmlGit: 'None',
        emailHtmlFigma: 'https://www.figma.com/proto/lZiNYwaMy0bVgDDTuwKPld/YogaliciousEmail?page-id=0%3A1&node-id=2%3A2&viewport=241%2C48%2C0.46&scaling=min-zoom',
        img2: '/assets/images/yogaliciousExample.jpg',
        img3: '/assets/images/yogaliciousEmail.jpg',
        overlay: 'yellow',
        font: 'black',
    },
    {
        id: 2,
        title: 'GHOST RIDER BIKES',
        description: 'HTML CSS JS BOOTSTRAP SASS SHOPIFY FIGMA ADOBE PHOTOSHOP',
        img1: '/assets/images/ghostRiderBikesFront.jpg',
        titleExample: 'GHOSTRIDER',
        objectiveTitle: 'OBJECTIVE',
        objective: 'To create a marketing & sales website and HTML email for a new brand of bike brand: ‘GhostRider’. Technology used includes HTML, SASS, Bootstrap, Shopify, Figma, Photoshop, Illustrator.',
        contributorsTitle: 'CONTRIBUTORS',
        contributors: ['Website Development: Alicia Morley', 'Website Design: Third-Party UI Designer', 'HTML Email Design: Alicia Morley', 'HTML Email Development: Alicia Morley', 'Images: Unsplash, Pexels'],
        programsTitle: 'DESIGN & DEVELOPMENT',
        programs: 'Figma, Photoshop, Illustrator, HTML, CSS, JS, SASS Pre-processor, Bootstrap, Shopify',
        websiteTitle: 'WEBSITE',
        website: "For the GhostRider website my main goal was to take a figma document created by a Professional UX/UI designer and implement pixel-perfect replication using code. I heavily customized bootstrap components to re-create the UX/UI design and layout. I used sass pre-processor in order to best organize my styling utilizing variables and mixins to efficiently update mulitple areas of the site at the same time - for example the custom button and colour standards throughout. I used a gsap animation trigger on scroll to implement a rotating bike with parallax effect. For the in-site purchasing, I intergrated Shopify and edited the stylesheet to compliment the overall design of the site. Working with SASS gave me great insight into how to organise my stylesheet code in a different way to CSS. I had used SASS briefly before but this was the first time using it for so many styling elements; it was a great learning process. Collaborating with a professional designer's layout and idea really pushed me to find different ways of implementing specific design, animation and functionality, which in turn has given me a broader knowledge of the possibilities available.",
        siteAdressWeb: 'https://clever-heyrovsky-7f4df4.netlify.app',
        siteAdressGit: 'https://github.com/Alicia-M-M/ghostRiderWebsite',
        siteFigma: 'https://www.figma.com/proto/223dvFD5ATKItLVRRJHSYx/Ghost-Rider-Prototype-Doc?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2&scaling=scale-down-width',
        htmlEmailTitle: 'HTML EMAIL',
        html: 'I designed and developed the GhostRider HTML email using the website style guide to keep the design on brand. I used Figma to design the layout and HTML for the email itself. I created buttons and graphics and added a dark mode to the email.The email is responsive, scailing where needed from a two column to a one column layout.',
        emailHtmlAdress: 'https://tender-poitras-bcb6d3.netlify.app',
        emailHtmlGit: 'https://github.com/Alicia-M-M/ghostRider-email',
        emailHtmlFigma: 'https://www.figma.com/proto/Lpbm1cRCwV3ykY2spHBXKR/html-Email-Ghost-Rider-final-render?page-id=0%3A1&node-id=301%3A7&starting-point-node-id=20%3A2&scaling=scale-down-width',
        img2: '/assets/images/ghostRiderWebsite.jpg',
        img3: '/assets/images/emailGhostRiderSite.jpg',
        overlay: 'pink',
        font: 'black',
    },
    {
        id: 3,
        title: 'GEO PHONE PROMO SITE',
        description: 'REACT CSS REACTSTRAP REDUX FIGMA ADOBE PHOTOSHOP',
        img1: '/assets/images/geoPhoneFront.jpg',
        titleExample: 'GEO PHONE',
        objectiveTitle: 'OBJECTIVE',
        objective: 'To design then develop a fictional promo site and HTML email for GEO PHONE. Technologies used includes React, Reactstrap, React-router, Redux, CSS Animations, Figma, Photoshop  and Illustrator.',
        contributorsTitle: 'CONTRIBUTORS',
        contributors: ['Website Development: Alicia Morley', 'Website Design: Alicia Morley', 'HTML Email Design: Alicia Morley', 'HTML Email Development: Alicia Morley', 'Images: Unsplash, Pexels'],
        programsTitle: 'DESIGN & DEVELOPMENT',
        programs: 'Figma, Photoshop, Illustrator, React, React-Redux, CSS, Reactstrap, React-Animate-on-Scroll',
        websiteTitle: 'WEBSITE',
        website: 'When considering the overall design and UI of the site I wanted to have a consistant feel using three different colours for button navigation and also a strong brand identity echoing colours from the cases in the overall site. Designing the site and using the Figma layout as a guideline really challenged me to get the sites end result exactly like the initial concept. I developed the site to have multiple re-useable com  ponents using react and also to use react hooks such as useState to add state to my functional components and useEffect to mange any ‘side-effects’ in my components. For navigation I used react-router and react-router-hash-link and for updating and managing state I used redux. I used conditional statements, ternary operators and CSS to implement different visual results depending on criteria.',
        emailHtmlAdress: 'https://kind-stonebraker-b436ef.netlify.app',
        siteAdressWeb: 'https://friendly-poincare-114884.netlify.app',
        siteAdressGit: 'https://github.com/Alicia-M-M/geo-phone-website',
        siteFigma: 'https://www.figma.com/proto/iCqR5r5kYcQrB8FxaaJI5P/Phone-Promo-React-app-render-final?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2&scaling=scale-down-width',
        htmlEmailTitle: 'HTML EMAIL',
        html: 'I developed the ‘GEO PHONE’ html email adding an animated gif to the header which created in photoshop. I used Figma to design the layout and HTML for the email itself. I created png buttons and graphics in Photoshop and added a dark mode to the email.',
        emailHtmlGit: 'https://github.com/Alicia-M-M/geo-phone-email',
        emailHtmlFigma: 'https://www.figma.com/proto/1gVErmZbDUY9vX1Wwoklmw/phone-promo-html-email-final-render?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2&scaling=scale-down-width',
        img2: '/assets/images/phonePromoWebsite.jpg',
        img3: '/assets/images/emailGeoSiteV1.jpg',
        overlay: 'darkGrey',
        font: 'white',
    },
    {
        id: 4,
        title: 'PORTFOLIO WEBSITE',
        description: 'REACT REACTSTRAP SKETCH ADOBE PHOTOSHOP ADOBE ILLUSTRATOR',
        img1: '/assets/images/portfolioFront.jpg',
        titleExample: 'PORTFOLIO WEBSITE',
        objectiveTitle: 'OBJECTIVE',
        objective: 'To design then develop my personal portfolio and HTML email. To build the site I used React, Reactstrap, userContext, react-router, Framer-Motion, react-spring, Sketch, photoshop and illustrator.',
        contributorsTitle: 'CONTRIBUTORS',
        contributors: ['Website Development: Alicia Morley', 'Website Design: Alicia Morley', 'HTML Email Design: Alicia Morley', 'HTML Email Development: Alicia Morley', 'Images: Unsplash, Pexels'],
        programsTitle: 'DESIGN & DEVELOPMENT',
        programs: 'Sketch, Photoshop, React, Redux, Reactstrap, CSS, JS, Framer-Motion, React-Spring, React-Transition-Group',
        websiteTitle: 'WEBSITE',
        website: 'For my portfolio site I really wanted to have a simple design with some elegant functionality, styling and animations. I picked  a handwritten header font to add a personalized feel and created circular buttons to add a customized UI navigation. I really enjoyed creating the intro ‘alicia morley’ signature using css animations and svg paths. I used userContext as a way to pass my data throughout my application without prop drilling. I implemented useMediaQuery from react-responsive with css variables for the dark mode functionality and stored the users preference in localStorage so on page change/navigating away from the page the preference is temporarily stored. For the on click navigation to view the portfolio items react-router params has been used.',
        siteAdressWeb: 'https://www.aliciamorley.com/',
        siteAdressGit: 'https://github.com/Alicia-M-M/alicia-morley-portfolio',
        siteFigma: 'https://www.sketch.com/s/12b337fb-6fb4-4a43-9726-2fe54b94e452/a/dlWoW5n/play',
        htmlEmailTitle: 'HTML EMAIL',
        html: 'I developed my Portfolio HTML email keeping everything simple and on brand with my website so when it is emailed to recruiters and companies all my information and experience is clear. I used Sketch to design the layout and HTML for the email itself. I created png buttons and graphics and added a dark mode.',
        emailHtmlAdress: 'https://jovial-pike-edbf80.netlify.app',
        emailHtmlGit: 'https://github.com/Alicia-M-M/portfolio-email',
        emailHtmlFigma: 'https://www.sketch.com/s/80975f55-09a4-441c-a10a-2d3298cb8de3/a/OmW34e2/play',
        img2: '/assets/images/portfolioWebsite.jpg',
        img3: '/assets/images/portfolioEmail.jpg',
        overlay: 'darkGrey',
        font: 'white',
    },
    {
        id: 5,
        title: 'LUXURY PRODUCT SITE',
        description: 'HTML CSS JAVASCRIPT SKETCH ADOBE PHOTOSHOP',
        img1: '/assets/images/luxuryFront.jpg',
        titleExample: 'PORTFOLIO WEBSITE',
        objectiveTitle: 'OBJECTIVE',
        objective: 'To design then develop an e-commerce page with search, sort and wishlist functionality. Technologies used include HTML, CSS, JS, flex-box, Figma and Photoshop.',
        contributorsTitle: 'CONTRIBUTORS',
        contributors: ['Website Development: Alicia Morley', 'Website Design: Alicia Morley', 'HTML Email Design: Alicia Morley', 'HTML Email Development: Alicia Morley', 'Images: Unsplashed, Pexels'],
        programsTitle: 'DESIGN & DEVELOPEMENT',
        programs: 'Figma, Photoshop, HTML, CSS, JS, Flexbox',
        websiteTitle: 'WEBSITE',
        website: "For the Luxury site I wanted to create all the functional components with JavaScript. I built a product grid layout that on click would add an item to a wishList. I also added a fixed sidebar for the product filters and a keyword search bar for more specific filtering of products. I used flex-box for layout and scaleability at specific breakpoints. I wanted to keep the page styling very clean and simple using high impact images from Pexels and Unsplash for a luxury ecommerce feel. The project is still a 'WIP' as I would like to add futher funtional elements to the site aswell as some subtle on hover animations for the images and texts. I would also like to amend a problem I had with my build files. I am using an npm package called 'usemin' and it is not very compatable with ES6 so I had to change my 'let's to 'var's otherwise the run build would exit with a build error. After research I've found a replacement for uglify.js - Terser, and I will update my build at a later stage.",
        siteAdressWeb: 'https://vibrant-swanson-9fe6e9.netlify.app/',
        siteAdressGit: 'https://github.com/Alicia-M-M/luxuryWebsite',
        siteFigma: 'https://www.figma.com/proto/2VMu6pTsuhLT41mjZ293g5/luxuryWebsite---Final?page-id=0%3A1&node-id=101%3A77&starting-point-node-id=101%3A77&scaling=scale-down-width',
        htmlEmailTitle: 'HTML EMAIL',
        html: 'I developed the Luxury HTML email making sure that the images when scaled to a small screen size would still look great as I wanted the imagery to be full page on all sizes/not break into smaller columns as on previous designs. When designing the layout I thought this would look really impactful and dynamic like alot of current retail emails. I kept all the styling on brand by designing the layout in Figma. I also create an animated header giff that continuously rotates',
        emailHtmlAdress: 'https://clever-franklin-7b245e.netlify.app',
        emailHtmlGit: 'https://github.com/Alicia-M-M/luxury-email/',
        emailHtmlFigma: 'https://www.figma.com/proto/d3ivTf69hhOKpZNIWXjysq/luxuryHtmlEmail---Final?page-id=0%3A1&node-id=10%3A113&starting-point-node-id=10%3A113&scaling=scale-down-width',
        img2: '/assets/images/luxuryImagePortfolio.jpg',
        img3: '/assets/images/luxuryEmail.jpg',
        overlay: 'yellow',
        font: 'black',
    },
    {
        id: 6,
        title: 'MASS EFFECTS SITE',
        description: 'REACT MONGODB ATLAS AFTER EFFECTS FIGMA PHOTOSHOP',
        img1: '/assets/images/massEffectWebFront.jpg',
        titleExample: 'PORTFOLIO WEBSITE',
        objectiveTitle: 'OBJECTIVE',
        objective: 'To design then develop a game ratings promo site with sort, select and flip card functionality. Technologies used include Figma, Photoshop, After Effects, React, MongoDB Atlas, Express, Node JS.',
        contributorsTitle: 'CONTRIBUTORS',
        contributors: ['Website Development: Alicia Morley', 'Website Design: Alicia Morley', 'HTML Email Design: Alicia Morley', 'HTML Email Development: Alicia Morley', 'Images: Unsplashed, Pexels'],
        programsTitle: 'DESIGN & DEVELOPEMENT',
        programs: 'Figma, Photoshop, After Effects, React, MongoDB Atlas, Express, Node JS',
        websiteTitle: 'WEBSITE',
        website: "COMING SOON WIP! Two of my main goals for the 'Mass Effects My Ratings' Website were to create sleek looking and informative flip card component and to have a database with crew member info stored within it. I took inspiration for my design from Mass Effect 1 & 2 and really wanted to have fun with the graphics as this is intended to be an eye-catching promo micro site. The mongoDB database provides data however currently does not store data inputed from the user. The user can select their top three crew members, search the crew by name and select the character class of each crew member.",
        siteAdressWeb: 'https://github.com',
        siteAdressGit: 'https://github.com',
        siteFigma: 'https://www.figma.com/proto/lFaPv3EigCDieK5kk2h7QB/massEffect?page-id=0%3A1&node-id=413%3A933&viewport=-706%2C896%2C0.1&scaling=min-zoom&starting-point-node-id=413%3A933',
        htmlEmailTitle: 'HTML EMAIL',
        html: 'I designed the HTML to compliment the webiste and with the same intention - to have an engaging and informative design. I added an MP4 rather than a gif for the header as I wanted to use After Effects for the animation and to experiment with adding an MP4 to an HTML email.',
        emailHtmlAdress: 'https://comforting-gingersnap-e429fe.netlify.app/',
        emailHtmlGit: 'https://github.com/Alicia-M-M/massEffectsMyRatingsEmail',
        emailHtmlFigma: 'https://www.figma.com/proto/5RjugCUzlJ6KlCiCbvybsx/massEffectsMyRatingsEmail?page-id=0%3A1&node-id=3%3A2&viewport=291%2C3021%2C0.46&scaling=min-zoom',
        img2: '/assets/images/massEffectWeb.jpg',
        img3: '/assets/images/massEffectEmailLayout.jpg',
        overlay: 'yellow',
        font: 'black',
    },
    
]



export const UserContext = createContext([HERO, ABOUT, PORTFOLIOWORK])