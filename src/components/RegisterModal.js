import axios from 'axios'
import React,{useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import {useHistory } from 'react-router-dom'

function RegisterModal() {
    const [show,setshow] = useState(true)
    const [username ,setusername]=useState()
    const [password,setpassword]=useState()
    const [password2,setpassword2] =useState()
    const [email,setemail] =useState()
    const history = useHistory()
    const login =()=>history.push('/login')
    const register =()=>history.push('/register')
    const name=()=>history.push('/usernameerror')
    const pwderror=()=>history.push('/passworderror')
    const field=()=>history.push('/fields')
    const success =()=>history.push('/LogoutModal')
   
    const handleHide =()=>{
        setshow(false)
    }
    const handleSubmit=()=>{
        if( username==null || email==null || password==null || password2==null ){
            field()
            setTimeout(register,2000)
        }else{
                if(password!==password2){
                    pwderror()
                    setTimeout(register,2000)
                }else{
                    axios.post('https://chikubodana.pythonanywhere.com/api/v1/register/',{username:username,password:password,email:email}).then(()=>{
                        console.log('user created');
                        success()
                        setTimeout(login,3000)
            
                    }).catch(err=>{
                        console.log(err)
                        name()
                        setTimeout(register,2000)
            
                    })
                    
                

            }
            
           
            
        }
        

        
        
        
    }
    return (
        <div style={{margin:30,padding:20}}>
            {/* <h4>If you are not registered on ThoughtBook  </h4><Button variant='danger' onClick={handleShow}>Register/SignUp</Button> */}
            <Modal backdrop="static" show={show}    onHide={handleHide}>
                <Modal.Header className='bg-success text-light' closeButton>
                    <Modal.Title>Registeration Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  >
                        <Form.Group>
                            <Form.Label>UserName</Form.Label>
                            <Form.Control onChange={(e)=>setusername(e.target.value)} type='text'/>
                            <Form.Text className="text-muted"  >Keep in Mind your username because it required at time of  login</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(e)=>setemail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' onChange={(e)=>setpassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' onChange={(e)=>setpassword2(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-success' onClick={handleSubmit} >Submit</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default RegisterModal
