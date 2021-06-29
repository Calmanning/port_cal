
import React from 'react'
import { Col, Row, Container } from "../components/Grid";
import "./style.css"

const Landing = () => {
    return (

        <Container >
            <div className="row tree">
                <Col size="sm-3"> 
                <img src="../../images/cal.JPG" alt="It's an image of a charming, capable, and inscrutibly obective person."
                    className="sm img-fluid shadow img-thumbnail rounded float-left border" id="face"/> </Col>
                <div className="col-sm-6" id="bio"> <p>Left-handed, obsequiously tenacious, Calvin is proficient in Javascript, HTML, CSS, SQL/Sequelize, MongoDB, node.js, & react. He is an experienced research-driven copy-writer with corporate and start-up experience, developing digital and serial content to millions for viewers.
            Expertise crafting concise, clear, and compelling content to support a range of experiences and building inclusive communities.</p>
            <br />
            <p>
                If you'd like to contact me, I can be reached at <a href="mailto:calmanning@gmail.com">calmanning@gmail.com</a>
            </p>
            </div>
            
            </div>

        </Container>

    )
}

export default Landing