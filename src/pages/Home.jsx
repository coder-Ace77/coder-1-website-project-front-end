import NavBar from "../components/nav_bar";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Home = () => {

    return (
        <div>
            <NavBar />
            <Container style={{ backgroundColor: 'black', height: '92vh' }} flush>

                <Row>
                    <Col style={{ color: 'white' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolores saepe odio reprehenderit laudantium assumenda eos minima illo error. Voluptate itaque, veritatis accusamus inventore nostrum non ipsam vel fugiat tempore.
                    </Col>
                    <Col>
                        <Container style={{ backgroundColor: 'grey', height: '100vh' }} flush>
                            <AceEditor mode="python" theme="monokai"
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    showLineNumbers: true,
                                    fontSize: 25,
                                    height: '600',
                                }}

                            />
                        </Container>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
