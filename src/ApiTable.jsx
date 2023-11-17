import { Card, Col, Table ,Pagination } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from "./Sidebar";
import NavBar from "./Navbar";

const ApiTable = () => {
    return (
        <Container fluid className='ps-0' >
            <NavBar />
            <Row className=' background'>
                <Col xs={2}>
                    <SideBar />

                </Col>
                <Col xs={10}>
                    <Row className='mt-3 '>
                        <Card className="px-0">
                            <Card.Header><span className="textcolor1 fw-bold "> Table</span></Card.Header>
                            <Card.Body className="p-0">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <td className="fw-bold text-secondary">S.no.</td>
                                            <td className="fw-bold text-secondary">Name</td>
                                            <td className="fw-bold text-secondary">E-mail id</td>
                                            <td className="fw-bold text-secondary">Mobile Number</td>
                                            <td className="fw-bold text-secondary">Message</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>fefef</td>
                                            <td>dwrvre@gmail.com</td>
                                            <td>56445465465</td>
                                            <td>hii</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>ffdde</td>
                                            <td>dwrvvfrt@gmail.com</td>
                                            <td>5644512548</td>
                                            <td>hello</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>fefvrt</td>
                                            <td>dwrfdfe@gmail.com</td>
                                            <td>5644512357</td>
                                            <td>good</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="d-flex justify-content-end px-2">
                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item active> {1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Next />
                                </Pagination>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}
export default ApiTable