import React,{useState,useContext,useEffect} from 'react'
import {Button,Form,Modal} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

import axios from 'axios'
import { BrandContext, CheckContext, TokenContext } from '../App'






function LoginModal() {
    
    const tokenmanger=useContext(TokenContext)
    const brand =useContext(BrandContext)
   
    const [modalshow,setmodalshow] = useState(true)
    const [username,setusername] =useState('')
    const [password,setpassword]=useState('')
    const [gettoken,settoken]=useState(null)
    
    const history =useHistory()
    const errors =()=>history.push('/ErrorModal')
    const home =()=>history.push('/')
    const succes =()=>history.push('/SuccessModal')
    const login=()=>history.push('/login')
    const check = useContext(CheckContext)
    
    const modalhide =()=>{
        setmodalshow(false)
        
    }
    
     
    const handleLogin =  ()=>{
        axios.post('https://chikubodana.pythonanywhere.com/api/login/',{username:username,password:password}).then((res)=>{
      settoken(res.data.token)
      succes()
      tokenmanger.dispatch({type:'change',value:res.data.token})
      check.dispatch2('update')
      brand.dispatch3({type:'userlogin' ,value:username})
      setTimeout(home,2000)
      
    
    }).catch(err=>{
        
        errors()
        setTimeout(login,3000)
        

    })}
  
        
        
        
   useEffect(()=>{
       

    },[gettoken,tokenmanger])
    


    return (
        <div style={{margin:30,padding:20}}>

            <Modal backdrop="static" show={modalshow} onHide={modalhide}>
                <Modal.Header className="bg-warning " closeButton>
                    <Modal.Title>Log In </Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type='text' validated onChange={e=>{setusername(e.target.value)}}placeholder='Your UserName' />
                            <Form.Text className='text-muted'>Please Provide Your Registered Username</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password'  onChange={e=>{setpassword(e.target.value)}} placeholder="Password" />
                        </Form.Group>
                        
                    </Form>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleLogin} variant='outline-warning'>LogIn</Button>
                </Modal.Footer>
            </Modal>
           
            
        </div>
    )
}


export default LoginModal
