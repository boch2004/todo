    import { useState } from 'react';
    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { EditTask } from '../redux/todoslice/TodoSilice';

    function Example({id}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edited, setEdited] = useState({
        title:"",
        description:"",
    })

    return (
        <>
        <Button className='h-[50px text-black ] ' variant="secondary" onClick={handleShow}>
           Edite
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Taske</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter task titel"
                    autoFocus
                    onChange={(e)=>{setEdited({...edited,title:e.target.value})}}
                />
                 <Form.Label></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter task description"
                    autoFocus
                    onChange={(e)=>{setEdited({...edited,description:e.target.value})}}
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button className=' text-black' variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button className=' text-black'  variant="secondary" onClick={()=> {handleClose();dispatch(EditTask({id: id,edited}))}}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    }

    export default Example;