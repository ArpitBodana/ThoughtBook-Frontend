import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import { FaRegCopyright } from 'react-icons/fa'
import {Container,Row,Col} from 'react-bootstrap'
import style from '../custom.module.css'
import {AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
import Disc from './Disc'
import Privacy from './Privacy'
import Terms from './Terms'
import {AiOutlineCloseCircle} from 'react-icons/ai'



function Footer() {
    const [check,setcheck]=useState(true)
    return (
        <div>
            <div>
                
            <Router>
                
                <Container fluid className={style.headingback}>
                    <h5 className="  postion-realtive  mb-0 container-fluid bg-dark btn-lg text-center text-light">Usefull Links</h5>
                    
                    <Row  className="mb-0 container-fluid bg-dark btn-sm text-center text-light">
                    <Col className='btn btn-dark btn-sm  text-light'><Link to="/Disc" onClick={()=>setcheck(false)}>Disclaimer</Link></Col>
                    <Col className='btn btn-dark btn-sm'> <Link to="/Privacy" onClick={()=>setcheck(false)}>Privacy Policy</Link> </Col>
                    <Col className='btn btn-dark btn-sm'> <Link to="/Terms" onClick={()=>setcheck(false)}>Terms And Conditions</Link> </Col>
                    <Col className='btn btn-dark btn-sm'> <a href="https://docs.google.com/forms/d/e/1FAIpQLScFQZJtnnMKgl_2FPmVVpQbbbkamn_2BWKLCbMkrJ592YYQdA/viewform?usp=sf_link">Contact Us </a></Col>
                    </Row>
                    <Row className='text-right'>
                        <Col>                    <Link to=""className="text-light text-center" hidden={check} onClick={()=>setcheck(true)}><AiOutlineCloseCircle color={'red'} size='3vh'/> Close</Link></Col>
                    </Row>
                </Container>
                <Switch>
                    <Route exact path="/Disc"  component={Disc}/>
                    <Route path="/Privacy" component={Privacy}/>
                    <Route path="/Terms" component={Terms} />
                    <Redirect to="/" />
                </Switch>   
            </Router>
            </div>
            <h6 className="  postion-realtive fixed shadow-lg p mb-0 container-fluid bg-dark btn-sm text-center text-light"> <FaRegCopyright/> 2021 ThoughtBook WebSite Designed By ArpitBodana . <br/> Follow -<a href='https://github.com/ArpitBodana'><AiFillGithub color={'#ff758c '} size='5vh' /></a>  <a href='https://www.instagram.com/its_trick_master/'><AiOutlineInstagram color={'#ff758c '} size='5vh' /></a></h6>
            
        </div>
    )
}

export default Footer
