import React ,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {VscError} from 'react-icons/vsc'
function Nodata() {
    const [show,setshow] =useState(true)
    const handleModal =()=>{
        setshow(false)
    }
    return (
        <div>
            <Modal size='sm' show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title><VscError size='2em' className='text-danger' />Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Empty Fields or Data is Already present in DataBase</Modal.Body>
            </Modal>
            
        </div>
    )
}

export default Nodata
