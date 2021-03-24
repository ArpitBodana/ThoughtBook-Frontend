import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {RiErrorWarningFill} from 'react-icons/ri'

function Addwarn() {
    const [show,setshow] =useState(true)
    const handleModal =()=>{
        setshow(false)
    }
    return (
        <div>
            
            <Modal size='sm' show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Body><RiErrorWarningFill size='2em' className='text-warning'/>  Please Login To Perform These Type Of Actions</Modal.Body>
                </Modal.Header>
                
            </Modal>

        
        </div>
    )
}

export default Addwarn
