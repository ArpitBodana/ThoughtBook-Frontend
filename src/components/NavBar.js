import React ,{useContext} from 'react'
import {Nav, Button,Navbar, NavDropdown} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import {LinkContainer} from 'react-router-bootstrap'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import Add from './Add'
import Edit from './Edit'
import axios from 'axios'
import { BrandContext, CheckContext, TokenContext } from '../App'
import ErrorModal from './EModal'
import SModal from './SModal'
import LogoutModal from './LogoutModal'
import UpdateModal from './UpdateModal'
import SaveModal from './SaveModal'
import DeleteModal from './DeleteModal'
import Nodata from './Nodata'
import Alertusername from './Alertusername'
import Alertpswrd from './Alertpswrd'
import Alertpswrd2 from './Alertpswrd2'
import Alertfields from './Alertfields'
import Changepassword from './Changepassword'
import ChangeSuc from './ChangeSuc'
import Unauthorized from './Unauthorized'
import Addwarn from './Addwarn'
import style from '../custom.module.css';
import { GiBlackBook} from "react-icons/gi";
import { HiLogin,HiLogout } from "react-icons/hi";
import { FcHome } from "react-icons/fc";
import {TiInfoLarge} from "react-icons/ti";
import {RiLockPasswordFill} from "react-icons/ri";
import {CgAdd} from "react-icons/cg";
import {MdModeEdit} from "react-icons/md";
import {IoPersonAddSharp} from "react-icons/io5";
function NavBar() {
    const token =useContext(TokenContext)
    const mytoken3 = token.token.token
    const check = useContext(CheckContext)
    const brand =useContext(BrandContext)
    const brandname = brand.brand.brand
    const valuecheck=check.check.check

    
    
    
    const handleLogout =()=>{
        axios.post('https://chikubodana.pythonanywhere.com/api/logoutall/',null,{ headers : {'Authorization' : `Token ${mytoken3}`}}).then(()=>{
        console.log('logout successfull');
        
        console.log(mytoken3);
        check.dispatch2('update2')
        brand.dispatch3({type:'userlogout'})
        
       
        }).catch(err=>console.log(err),console.log(`error in logout ${mytoken3}`))
        
    }
    
   

    return (
        <div>
            <Router >
                <Navbar  className='container-fluid  text-center mb-5' collapseOnSelect={true} bg='dark' variant='dark' expand='sm'>
                <Navbar.Brand   className={style.brandname}>{brandname} <GiBlackBook  size='1.5em'/></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <LinkContainer to="/">
                            <Nav.Link  >Home <FcHome size='1.5em'/> </Nav.Link>
                        </LinkContainer>
                        <NavDropdown hidden={valuecheck}  title="Options"  >
                        <LinkContainer to="/add">
                            <NavDropdown.Item>Add  <CgAdd size='1.5em'/></NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/edit">
                            <NavDropdown.Item>Edit  <MdModeEdit size='1.5em'/></NavDropdown.Item>
                           
                        </LinkContainer>
                        </NavDropdown>
                        
                        <LinkContainer to="/about">
                            <Nav.Link hidden={false}  >Info <TiInfoLarge size='1.5em'/></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link hidden>Contact</Nav.Link>
                        </LinkContainer>
                        <NavDropdown  title='User'>
                           
                            <LinkContainer to="/login">
                                <NavDropdown.Item hidden={!valuecheck}>Login  <HiLogin size='1.5em'/></NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <NavDropdown.Item hidden={!valuecheck}>Register <IoPersonAddSharp size='1.5em'/></NavDropdown.Item>
                                
                            </LinkContainer>
                            
                            
                            <NavDropdown.Divider />
                            <LinkContainer to='/change-password'>
                            <NavDropdown.Item hidden={valuecheck} >Change Password <RiLockPasswordFill size='1.5em'/></NavDropdown.Item>
                            </LinkContainer>
                            
                            <NavDropdown.Item hidden={valuecheck} ><Button onClick={handleLogout}>Logout <HiLogout size='1.5em'/> </Button></NavDropdown.Item>

                        </NavDropdown >
                        
                       
                        
                        
                       
                        
                    </Navbar.Collapse>
                    
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/login"  component={LoginModal} />
                    <Route path="/register" component={RegisterModal}/>
                    <Route path="/add" component={Add} />
                    <Route path="/edit" component={Edit}/>
                    <Route path='/ErrorModal' component={ErrorModal}></Route>
                    <Route path='/SuccessModal' component={SModal}></Route>
                    <Route path='/LogoutModal' component={LogoutModal}></Route>
                    <Route path='/SaveModal' component={SaveModal}></Route>
                    <Route path='/UpdateModal' component={UpdateModal}></Route>
                    <Route path='/DeleteModal' component={DeleteModal}></Route>
                    <Route path='/Nodata' component={Nodata}></Route>
                    <Route path='/usernameerror' component={Alertusername}></Route>
                    <Route path='/passworderror' component={Alertpswrd}></Route>
                    <Route path='/passworderror2' component={Alertpswrd2}></Route>
                    <Route path='/fields' component={Alertfields}></Route>
                    <Route path='/change-password' component={Changepassword}></Route>
                    <Route path='/changedone' component={ChangeSuc}></Route>
                    <Route path='/unauthorized' component={Unauthorized}></Route>
                    <Route path='/addwarn' component={Addwarn}></Route>

                </Switch>
            </Router>
            
        </div>
    )
}

export default NavBar
