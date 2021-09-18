import React from "react";
import {Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg={'primary'} expand="lg" variant={'dark'}>
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>
                        MERN Stack 2021
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className={'m-auto'}>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                        </Form>
                    </Nav>
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link to={"/"}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={"/mynotes"}>MyNotes</Link>
                        </Nav.Link>
                        <NavDropdown title="Khachornchit S." id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header
