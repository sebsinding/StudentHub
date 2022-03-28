import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarHeader.css';

    // https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css

    /* const myNavLink = ({
        children, style, ...restProps
    }) => (
        <Nav.Link
        {...restProps}
        style={{
            backgroundColor: 'white',
            opacity: 0.9,
        }}
        >
        {children}
        </Nav.Link>
    ); */

    const NavBarHeader = () => {
        return (
            <>
            <Navbar sticky="top" variant="dark" className="NBHeader">
                <Container>
                    <Navbar.Brand href="/Calendar">StudentHub.</Navbar.Brand>
                        <Nav>
                            <Nav.Link className='navlink' href="/Calendar">Calendar</Nav.Link>
                            <Nav.Link className='navlink' href="/MyLessonPlan">My Lesson Plan</Nav.Link>
                            <Nav.Link className='navlink' href="/StudyGuidance">Study Guidance</Nav.Link>
                            <Nav.Link className='navlink' href="/Announcements">Announcements</Nav.Link>
                            <Nav.Link className='navlink' href="/CourseDatabase">Course Database</Nav.Link>
                            <Nav.Link className='navlink' href="/Grades">Grades</Nav.Link>
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
