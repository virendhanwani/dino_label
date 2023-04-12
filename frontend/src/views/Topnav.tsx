import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Nav, NavbarText } from 'reactstrap';

const pages = ['Products', 'Pricing', 'Blog'];

// const useStyles = makeStyles({
//     glassBar: {
//         backgroundImage:'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))',
//         backdropFilter: "blur(10px)",
//         boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
//     }
// });

export const Topnav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const mystyle = {
    boxShadow: '0 0 5px 0',
    background: 'transparent',
    backdropFilter: 'blur(10px)',
    zIndex: 300
  };
  return (
    <Navbar style={mystyle}>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="/dino.svg"
          style={{
            height: 40,
            width: 40,
          }}
        />
        Reactstrap
      </NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
    </Navbar>
  );
};
