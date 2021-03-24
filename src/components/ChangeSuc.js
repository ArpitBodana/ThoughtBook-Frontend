import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import{TiTick} from 'react-icons/ti'

function ChangeSuc() {
    const [show,setshow] =useState(true)
    const handleModal =()=>{
        setshow(false)
    }
    return (
        <div>
            
            <Modal size='sm' show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Body><TiTick size='2em' className='text-success' />Password Changed Successfully</Modal.Body>
                </Modal.Header>
            </Modal>

        
        </div>
    )
}

export default ChangeSuc
