import React, {useState} from 'react'
import {Tabs,Tab,Container,Row,Col} from 'react-bootstrap'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

function MyTab() {
    const [key,setkey] =useState('home')
    return (
        <div>
            <Container>
                <Row>
                    <Col   xm={12} sm={8} md={10} lg={12}>
                        <Tabs  variant='pills' activeKey={key} onSelect={(k)=>setkey(k)} >
                            <Tab  eventKey="home" title="Home" >
                                
                                
                            </Tab>
                            <Tab eventKey="user" title="User" >
                                
                                
                                    <LoginModal/>
                                    <RegisterModal/>   
                            </Tab>
                            <Tab eventKey="about" title="About">
                                <h3>This is the about section</h3>
                            </Tab>
                            <Tab eventKey="faqs" title="FAQS">
                                <h4>here is the faqs section</h4>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}

export default MyTab
