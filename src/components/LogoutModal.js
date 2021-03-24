import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import{TiTick} from 'react-icons/ti'

function LogoutModal() {
    const [show,setshow]=useState(true)
    const handleModal=()=>{
        setshow(false)
    }
    return (
        <div>
            <Modal size='sm'show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title><TiTick size='2em' className='text-success' /> Successfully Registered!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Redirecting to Login!!</Modal.Body>

            </Modal>
            
        </div>
    )
}

export default LogoutModal
