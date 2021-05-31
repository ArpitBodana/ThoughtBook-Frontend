import React from 'react'
import {Accordion,Card,Button,Container,Row,Col} from 'react-bootstrap'



function About() {
    return (
        <div>
            <Container>
                
                <Row>
                    <Col>
                        <Accordion defaultActiveKey='0'  >
                            <Card >
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey='0'> What is ThoughtBook?</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>ThoughtBook is a Multi-User web app in which anyone can express their thoughts , by simply registering to the app.</Card.Body>

                                </Accordion.Collapse>
                                
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey='3'>User Options?</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>User has many options , Add Thoughts ,Edit Thoughts, Delete Thoughts, Change Password etc.</Card.Body>

                                </Accordion.Collapse>
                                
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey='2'> How to use Options?</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>To use any option first  you have to Login to the app, if you have not Regsiter to the app so please register first . After Login you will get extra options.</Card.Body>

                                </Accordion.Collapse>
                                
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey='1'> Security ?</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body><p>1 .User data is only accessed and manipulated by the user who is authorized to the data.</p> 
                                        <p>2. User is only able to access  their own  data .So user cannot manipulate the other user's data. </p>
                                        <p>3.By default this App provide Logoutall Option, it will Logout your id from all devices .</p>
                                        <p>4. On Refreshing the server ,user will logout automatically.</p>
                                    </Card.Body>
                                        

                                </Accordion.Collapse>
                                
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey='5'> Features?</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>Click or Hover on thought it will automatically Zoomed.Login , Logout, Register, and Change Password options are available in User Option.</Card.Body>

                                </Accordion.Collapse>
                                
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey='4'> Future Updates?</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>In Future ,there may be Forget Password,Delete Registered Id and more options will be available.</Card.Body>

                                </Accordion.Collapse>
                                
                            </Card>
                            
                           

                
                        </Accordion>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
    )
}

export default About
