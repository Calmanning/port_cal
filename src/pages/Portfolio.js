import { useState } from 'react'
import { Col, Row, Container } from "../components/Grid";
import Works from "../components/Works"
import "./style.css"

const Portfolio = () => {
    const[works, setWorks] = useState([
        
        {
                id: 15,
                name: "Clothes & Clothes Clothing",
                site: "https://clothes-and-clothes.herokuapp.com/",
                repo: "https://github.com/Calmanning/csm_new_proj",
                img: "../../images/clothes&clothes.bmp",
                blurb: "ecommerce website built with React, Redux, SCSS, Firebase API, & Stripe API"
        },
        {
                id: 14,
                name: "DunGen",
                site: "https://octowaggle.herokuapp.com/",
                repo: "https://github.com/desasser/dungen-frontend",
                img: "../../images/DunGen.bmp",
                blurb: "Dungeon Building Application with Social Integration made with React, Material UI, mySQL, and JWT"
        },
        {
                id: 13,
                name: "So Thirsty",
                site: "https://sothirstyproject.herokuapp.com/",
                repo: "https://github.com/Calmanning/so_thirsty",
                img: "../../images/so_thirsty.png",
                blurb: "Plant care assistance and social sharing app built using javaScript, jQuery, mySQL, AJAX, Handlebars, Foundation, Toastify, and Treffle API"
        },
        
        {
                id: 12,
                name: "Hey Bartender",
                site: "https://piefon.github.io/heybartender/",
                repo: "https://github.com/PieFon/heybartender",
                img: "../../images/hey_bartender.PNG",
                blurb: "Cocktail recipe database with search and save functions built using javaScript, AJAX, jQuery, CocktailsDB API, and Materialize"
        },
       
        {
                id: 11,
                name: "People Finder",
                site: "https://protected-tor-46211.herokuapp.com/",
                repo: "https://github.com/Calmanning/cm_imp_find",
                img: "../../images/pageIamge.bmp",
                blurb: "Filter and search a database of random people made with react, javaScript, and Bootstrap"
        },
        
        {
                id: 10,
                name: "Weather App",
                site: "https://calmanning.github.io/csm_whether_the_weather_homerwork6/",
                repo: "https://github.com/Calmanning/csm_whether_the_weather_homerwork6",
                img: "../../images/weather_app.png",
                blurb: "Call weather information, and 5-day forcast anywhere around the world. Uses JavaScript, AJAX, Bootstrap"
        },
        {
                id: 9,
                name: "Password Generator",
                site: "https://calmanning.github.io/csm_password_generator_homework3/",
                repo: "https://github.com/Calmanning/csm_password_generator_homework3",
                img: "../../images/Password_Gen.bmp",
                blurb: "Will take directions from user and generate a unique and personalized password. Made with javaScript, CSS, and HTML."
        },
        {
                id: 8,
                name: "Oliver Machinery",
                site: "https://olivermachinery.net/",
                img: "../../4mfc4mpf.bmp",
                blurb: "Marketing & Social Media Manager, UX writer for company ecommerce site"
        },
        {
                id: 7,
                name: "MithZan",
                site: "https://www.youtube.com/channel/UCKajXDl2vPA3qUoJvBlfFaw",   
                img: "../../mithzan.bmp",
                blurb: "Content Manager, Video Editor, PR for gaming YouTube channel"
        },
        {
                id: 6,
                name: "Your Pal Ross",
                site: "https://www.youtube.com/channel/UCCFxsaQFk71sCPlKm3_RiCw",   
                img: "../../yourpalross.bmp",
                blurb: "Content Manager and Video Editor for gaming YouTube channel"
        },
        {
                id: 5,
                name: "Visual Expansion Gallery",
                site: "https://www.youtube.com/channel/UCh1kPkcHexFmvjI_U_wg-7w",   
                img: "../../visualExpGallery.bmp",
                blurb: "Website redesign with online store, SEO improvement, social media"
        },
        {
                id: 4,
                name: "Aphmau Stories",
                site: "https://www.youtube.com/channel/UCh1kPkcHexFmvjI_U_wg-7w",   
                img: "../../iifdqsqz.bmp",
                blurb: "Showrunner, Producer & Manager for all content, marketing material, and merchandise"
        },
        {
                id: 3,
                name: "Aphmau",
                site: "https://www.youtube.com/channel/UCzYfz8uibvnB7Yc1LjePi4g",   
                img: "../../7c0c6xkc.bmp",
                blurb: "Showrunner, Director, Producer on gameplay, merchandise and narrative content from end-to-end"
        },
        {
                id: 2,
                name: "Castor",
                site: "https://www.youtube.com/channel/UCZBCtD0Xo6MUEg_D0de4KTA?view_as=subscriber",   
                img: "../../YTchannelCastor.bmp",
                blurb: "Writer, Talent, and Producer of all content for gaming/gameplay YouTube channel."
        },
        {
                id: 1,
                name: "Clare Meeker",
                site: "https://www.claremeeker.com/",   
                img: "../../clareMeeker.bmp",
                blurb: "Website/blog management, digital strategy, marketing materials and social content for award-winning middle-grade author"
        }
        
    ])

    return (
        <Container >
           
           <div className=" row tree">
               <br/>
                <h3>Some Things I've Done</h3>
                    <h5><a className="resume" 
                    href="https://docs.google.com/document/d/1RnYEx7M6vLi_T0e3OK0y9-WmTTQiLWcbxKhLpUY4W24/edit?usp=sharing" target="_blank">
                            And my Resume for context.</a>
                    </h5>
                    <h6>
                    Email me at <a href="mailto:calmanning@gmail.com"> calmanning@gmail.com </a> if you'd like to talk about my experiences.
                    </h6>
                {/* <div className="col-sm-4"> */}
                <Works works={works} />
                {/* </div> */}
            </div>

        </Container>
    )
}

export default Portfolio 