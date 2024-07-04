import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Coder-1-Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/coder-Ace77?tab=repositories">GitHub</Nav.Link>
                        <Nav.Link href="/sign">SignIn</Nav.Link>
                        <Nav.Link href="/questionlist">Questions</Nav.Link>
                        <Nav.Link href="/add_question">Add Question</Nav.Link>
                        <Nav.Link href='/profile'>Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
