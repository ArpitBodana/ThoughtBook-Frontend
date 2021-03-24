import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {RiErrorWarningFill} from 'react-icons/ri'
function Alertfields() {
    const [show,setshow] =useState(true)
    const handleModal =()=>{
        setshow(false)
    }
    return (
        <div>
            
            <Modal size='sm' show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Body> <RiErrorWarningFill size='2em' className='text-warning'/> Please Provide Data to all fields</Modal.Body>
                </Modal.Header>
                
            </Modal>

        
        </div>
    )
}

export default Alertfields
