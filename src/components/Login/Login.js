import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { AuthApi } from '../../apis/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../state/slice/userAuth';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const [mode, setmode] = useState('Sign Up')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [statusCode, setStatusCode] = useState(404);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector((state) => state);


    let userDetails = {
        email: email,
        userId: email,
        name: name,
        password: password
    };

    let userCredential = {
        email: email,
        password: password
    };



    const toogle = () => {
        if (mode === 'Sign Up') {
            setmode('Sign In');
        }
        else setmode('Sign Up')
    }


    const login = async (userCredential) => {
        await dispatch(signInUser(userCredential))

        navigate('/home');

    }

    const signUp = (userDetails) => {
        AuthApi.signUp(userDetails).then((response) => {
            setStatusCode(response.status);
            if (response.status <= 201) {
                console.log('y');
            }
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {mode}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {
                        ((mode === 'Sign Up') ? <><Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Name" onChange={(event) => setName(event.target.value)} />
                        </Form.Group></> : <></>)
                    }

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="inputPassword5" >Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>
                </Form>
                <div className='text-center'>
                    <p className='text-muted'>
                        {((mode === 'Sign Up') ? <>Already have Account?</> : <>Haven't any Account ?</>)}
                        <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={() => { toogle() }}>
                            {((mode === 'Sign Up') ? <> Sign In</> : <> Sign Up</>)}
                        </span>
                    </p>

                </div>
            </Modal.Body>
            <Modal.Footer>
                {((mode === 'Sign Up') ? <>
                    <Button onClick={() => signUp(userDetails)}>Sign Up</Button>
                </> : <>
                    <Button onClick={() => login(userCredential)}>Login</Button>
                </>)}

            </Modal.Footer>
        </Modal>
    );
}