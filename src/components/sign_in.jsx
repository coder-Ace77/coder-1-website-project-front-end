import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Sign_Form = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    }


    return (
        <Card>
            <Card.Body>
                <Container>
                    <Row>
                        <Image src={props.imageUrl} alt='Hello' style={{ width: '20vw', height: '40vh' }}></Image>
                    </Row>
                    <Row>
                        <Col>
                            <form action="/" onSubmit={submitHandler}>
                                <h1>{props.heading}</h1>
                                <Row>
                                    <input type="text" placeholder="Username" name="username" required></input>
                                </Row>
                                <Row>
                                    <input type="password" placeholder="Password" name="password" required></input>
                                </Row>
                                <Row>
                                    <Button variant="primary" type="submit">Sign In</Button>
                                </Row>
                            </form>

                        </Col>
                    </Row>
                </Container>

            </Card.Body>

        </Card >
    );
}

export default Sign_Form;
