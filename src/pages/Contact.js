import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form"
import "./style.css"

function Contact() {
       // Setting our component's initial state
        const [notes, setNotes] = useState([])
        const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDeafult();
        
    }


    return (
        <Container>
        <div  className="row tree">
          <Col size="md-6">
          
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Who are you?"
              />
              <Input
                onChange={handleInputChange}
                name="topic"
                placeholder="What's the headline?"
              />
              <TextArea
                onChange={handleInputChange}
                name="subject"
                placeholder="What did you want to talk about?"
              />
              <FormBtn
                disabled={!(formObject.name && formObject.subject)}
                onClick={handleFormSubmit}
              >
                Send it
              </FormBtn>
            </form>
            </Col>
        </div>
        </Container>
    );
}

export default Contact