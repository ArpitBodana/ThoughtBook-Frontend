import React,{useState} from 'react'
import{Modal} from 'react-bootstrap'
import{TiTick} from 'react-icons/ti'


function UpdateModal() {
    const [show,setshow]=useState(true)
    const handleModal=()=>{
        setshow(false)
    }
    return (
        <div>
            <Modal size='sm' show={show} onHinde={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Body ><TiTick size='2em' className='text-success ' /> Thought Updated ! </Modal.Body>
                </Modal.Header>

            </Modal>
        </div>
    )
}

export default UpdateModal
