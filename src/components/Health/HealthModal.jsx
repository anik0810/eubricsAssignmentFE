import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { HealthApi } from '../../apis/healthApi';
import { useDispatch } from 'react-redux';
import { addHealthData, updateHealthData } from '../../state/slice/healthSlice';



export default function HealthModal(data) {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        let userDetails = localStorage.getItem('userDetails');
        userDetails = JSON.parse(userDetails);
        setUserId(userDetails.userId);
    })

    const updatedData = {
        userId: userId,
        todo: todo,
        lastUpdate: new Date(),
        completed: false
    }
    const postData = {
        userId: userId,
        todo: todo,
        lastUpdate: new Date(),
    }
    const putHealth = {
        id: (data.heading==='Edit')?data.details.id:0,
        payload:updatedData
    }

    const add = (postData) => {
        dispatch(addHealthData(postData));
    }

    const update = (updatedData) => {
        dispatch(updateHealthData(putHealth));
    }

    return (
        <Modal
            {...data}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.heading} Todo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel controlId="floatingTextarea2" label="Todos">
                    <Form.Control
                        onChange={(event) => { setTodo(event.target.value) }}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        defaultValue={(data.heading === 'Edit') ? data.details.todo : ''}
                    />
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                {
                    (data.heading === 'Edit') ? <>
                        <Button onClick={() => { update(updatedData) }}>{data.heading}</Button>
                    </> :
                        <>
                            <Button onClick={() => { add(postData) }}>{data.heading}</Button>
                        </>
                }
            </Modal.Footer>
        </Modal>
    )
}
