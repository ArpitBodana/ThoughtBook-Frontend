import React,{useState,useContext} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { TokenContext } from '../App'

function Changepassword() {
    const [modalshow,setmodalshow] = useState(true)
    const modalhide =()=>{
        setmodalshow(false)
        
    }
    const token =useContext(TokenContext)
    const mytoken = token.token.token
    const history = useHistory()
    const change=()=>history.push('/change-password')
    const wrong =()=>history.push('/passworderror')
    const wrong2 =()=>history.push('/passworderror2')
    const empty =()=>history.push('/fields')
    const done =()=>history.push('/changedone')
    const home=()=>history.push('/')
    const [old,setold]=useState()
    const [newpwd,setnewpwd]=useState()
    const [newpwd2,setnewpwd2]=useState()
    const handleChange=()=>{
        if(old==null || newpwd==null || newpwd2==null ){
            
                empty()
                setTimeout(change,2000)

            
           }else{
            if(newpwd!==newpwd2){
            
                wrong()
                setTimeout(change,2000)
    
            }else{
                axios.put('http://localhost:8000/api/change-password/',{old_password:old,new_password:newpwd},{ headers : {'Authorization' : `Token ${mytoken}`}}).then(()=>{
                    done()
                    setTimeout(home,2000)

                }).catch(err=>{
                    wrong2()
                    console.log(err);
                    setTimeout(change,2000)

                })
            }

        }
        
       

    }
    return (
        <div>
            <Modal backdrop="static" show={modalshow} onHide={modalhide}>
                <Modal.Header className="bg-success text-light" closeButton>
                    <Modal.Title>Change Password </Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <Form >
                        <Form.Group>
                            <Form.Label>Your Old Password</Form.Label>
                            <Form.Control type='password'  onChange={e=>{setold(e.target.value)}} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type='password'  onChange={e=>{setnewpwd(e.target.value)}}  />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type='password'  onChange={e=>{setnewpwd2(e.target.value)}}  />
                        </Form.Group>
                    </Form>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleChange} variant='outline-success'>Change Password</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default Changepassword
