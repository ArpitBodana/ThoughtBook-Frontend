import React ,{useState} from 'react'
import {Modal } from 'react-bootstrap'
import {RiErrorWarningFill} from 'react-icons/ri'

function Alertusername() {
    const [show,setshow] =useState(true)
    const handleModal =()=>{
        setshow(false)
    }
    return (
        <div>
            
            <Modal size='sm' show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title> <RiErrorWarningFill size='2em' className='text-warning'/> Username Taken!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please Provide Different Username</Modal.Body>
            </Modal>

        
        </div>
    )
}

export default Alertusername
