import NavBar from "../components/nav_bar";
import Sign_Form from "../components/sign_in";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const SignIn = () => {
    return (
        <div>
            <NavBar />
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', height: "85vh", width: "100vw" }}>
                <Container flush>
                    <Row>
                        <Col>
                            <Sign_Form imageUrl={'enter.png'} heading={'SignIn'} type={'sign'} />
                        </Col>
                        <Col>
                            <Sign_Form imageUrl={'password.png'} heading={'Login'} type={'login'} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SignIn;
