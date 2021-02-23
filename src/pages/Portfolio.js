import { useState } from 'react'
import { Col, Row, Container } from "../components/Grid";
import Works from "../components/Works"
import "./style.css"

const Portfolio = () => {
    const[works, setWorks] = useState([
        
        {
                id: 1,
                name: "So Thirsty",
                site: "https://sothirstyproject.herokuapp.com/",
                repo: "",
                img: "../../images/so_thirsty.png",
                blurb: "Plant care assistance and social sharing app"
        },
        
        {
                id: 2,
                name: "Hey Bartender",
                site: "https://piefon.github.io/heybartender/",
                repo: "https://github.com/PieFon/heybartender",
                img: "../../images/hey_bartender.PNG",
                blurb: "cocktail recipe database with search and save functions"
        },
       
        {
                id: 3,
                name: "People Finder",
                site: "https://protected-tor-46211.herokuapp.com/",
                repo: "https://github.com/Calmanning/cm_imp_find",
                img: "../../images/pageIamge.bmp",
                blurb: "Filter and search a database of random people"
        },
        
        {
                id: 4,
                name: "Weather App",
                site: "https://calmanning.github.io/csm_whether_the_weather_homerwork6/",
                repo: "https://github.com/Calmanning/csm_whether_the_weather_homerwork6",
                img: "../../images/weather_app.png",
                blurb: "Call weather information, and 5-day forcast anywhere around the world"
        },
        
        {
                id: 5,
                name: "Password Generator",
                site: "https://calmanning.github.io/csm_password_generator_homework3/",
                repo: "https://github.com/Calmanning/csm_password_generator_homework3",
                img: "../../images/Password_Gen.bmp",
                blurb: "Will generate a unique and personalized password."
        },
    ])

    return (
        <Container >
           
           <div className=" row tree">
               <br/>
                <h3>Some Things I've Done</h3>
                    <h5><a className="resume" href="https://drive.google.com/file/d/1nvZPtDEVhhZS4Y34pSzWV_wYl199kVzH/view?usp=sharing" target="_blank">And my Resume for context.</a></h5>
                {/* <div className="col-sm-4"> */}
                <Works works={works} />
                {/* </div> */}
            </div>

        </Container>
    )
}

export default Portfolio 