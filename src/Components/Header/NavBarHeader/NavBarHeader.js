import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarHeader.css';

    const NavBarHeader = () => {
        return (
            <>
            <Navbar sticky="top" variant="dark" className="NBHeader">
                <Container>
                    <Navbar.Brand href="/Calendar">StudentHub.</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/Calendar">Calendar</Nav.Link>
                            <Nav.Link href="/MyLessonPlan">My Lesson Plan</Nav.Link>
                            <Nav.Link href="/StudyGuidance">Study Guidance</Nav.Link>
                            <Nav.Link href="/Announcements">Announcements</Nav.Link>
                            <Nav.Link href="/CourseDatabase">Course Database</Nav.Link>
                            <Nav.Link href="/Grades">Grades</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Pelle Andersen">
                                <NavDropdown.Item href="">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="">hello</NavDropdown.Item>
                                <NavDropdown.Item href="">:)</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                </Container>
            </Navbar>
            </>
            )
          };
  
  export default NavBarHeader;
