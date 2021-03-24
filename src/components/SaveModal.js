import React ,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import{TiTick} from 'react-icons/ti'

function SaveModal() {
    const [show,setshow]=useState(true)
    const handleModal=()=>{
        setshow(false)
    }
    return (
        <div>
            <Modal size='sm' show={show} onHide={handleModal}>
                <Modal.Header>
                    <Modal.Body><TiTick size='2em' className='text-success' /> Thought Added ! </Modal.Body>
                </Modal.Header>

            </Modal>
            
        </div>
    )
}

export default SaveModal
