import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {AiTwotoneDelete} from 'react-icons/ai'
function DeleteModal() {
    const [show,setshow]=useState(true)
    const handleModal=()=>{
        setshow(false)
    }
    return (
        <div>
            <Modal size='sm'show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Body><AiTwotoneDelete size='2em' className='text-success' />Thought Deleted</Modal.Body>
                </Modal.Header>

            </Modal>
        </div>
    )
}

export default DeleteModal
