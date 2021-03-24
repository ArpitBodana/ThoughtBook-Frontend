import React,{useState} from 'react'
import{Modal} from 'react-bootstrap'
import{TiTick} from 'react-icons/ti'

function SModal() {
    const [show,setshow] =useState(true)
    const handleHide =()=>{
        setshow(false)
    }
    return (
        <div>
            <Modal size='sm' show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Body><TiTick size='2em' className='text-success' /> Login Success  </Modal.Body>
                </Modal.Header>

            </Modal>
        </div>
    )
}

export default SModal
