import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {VscError} from 'react-icons/vsc'

function ErrorModal() {
    const [modalshow,setmodalshow] = useState(true)
    const modalhide =()=>{
        setmodalshow(false)
        
    }
    return (
        <div>
            <Modal size='sm' show={modalshow} onHide={modalhide}>
                <Modal.Header closeButton>
                    <Modal.Title><VscError  size='2em' className='text-danger' /> Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Username/Password Error</Modal.Body>
                <Modal.Footer>
                  <h7>Wait! You are redirecting to login page </h7>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ErrorModal
