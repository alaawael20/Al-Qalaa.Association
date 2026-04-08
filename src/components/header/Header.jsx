import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Header.css"

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <img
            src="/assets/logo/logo.png"
            alt="logo"
            height="70"
            className="d-inline-block align-top"
          />
          <div className="site-title">
            جمعية القلعة لرعاية التراث
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link href="#">الرئيسية</Nav.Link>
            <Nav.Link href="#">عنّا</Nav.Link>
            <Nav.Link href="#">الإعلانات</Nav.Link>
            <Nav.Link href="#">المراكز</Nav.Link>
            <Nav.Link href="#">المشاريع</Nav.Link>
            <Nav.Link href="#">البرامج</Nav.Link>
            <Nav.Link href="#">المبادرات</Nav.Link>

            <Button
              style={{
                backgroundColor: "#c9a14a",
                border: "none",
                padding: "6px 16px",
              }}
            >
              اتصل بنا
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;