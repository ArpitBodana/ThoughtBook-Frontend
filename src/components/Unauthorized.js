import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {RiErrorWarningFill} from 'react-icons/ri'

function Unauthorized() {
    const [show,setshow] =useState(true)
    const handleModal =()=>{
        setshow(false)
    }
    return (
        <div>
            <Modal size='sm' show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Unauthorized Access</Modal.Title>
                </Modal.Header>
                <Modal.Body><RiErrorWarningFill size='2em' className='text-danger'/>You have Not Permissions to Manipulate Other User's Data. Please Login to Manipulate Your own Data</Modal.Body>
            </Modal>
            
        </div>
    )
}

export default Unauthorized
