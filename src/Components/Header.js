import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  LucidePersonStanding,
  MapPinCheck,
  Presentation,
  ScanFace,
} from "lucide-react";
const Header = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true); // Navbar toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown toggle

  const toggleNavbar = () => setCollapsed(!collapsed);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="font-sans font-bold ps-5 ">
      <Navbar color="faded" light expand="md">
        {/* Logo Section */}
        <NavbarBrand href="/" className="d-flex align-items-center gap-2">
          <img
            src="https://res.cloudinary.com/dins17ov5/image/upload/v1742261446/LogoPng_zkctqx.png"
            alt="logo"
            className="w-10"
          />
          <p>Communion</p>
        </NavbarBrand>

        {/* Navbar Toggler for Mobile */}
        <NavbarToggler onClick={toggleNavbar} className="me-2" />

        {/* Navbar Items */}
        <Collapse isOpen={!collapsed} navbar>
          <Nav
            className="text-blue-800 text-md d-md-flex flex-md-row justify-content-md-evenly align-items-md-center w-100"
            navbar
          >
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            {/* Dropdown with Framer Motion Animation */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret onClick={toggleDropdown}>
                Event
              </DropdownToggle>

              {/* Framer Motion Animation for Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: dropdownOpen ? 1 : 0,
                  y: dropdownOpen ? 0 : -10,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  // position: "absolute",
                  // zIndex: 1000,
                  display: dropdownOpen ? "block" : "none",
                }}
              >
                <DropdownMenu right>
                  <DropdownItem href="/events">Upcoming Events</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => navigate("/createEvent")}>
                    Create Events
                  </DropdownItem>
                </DropdownMenu>
              </motion.div>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>

            {/* Show this link only on small screens */}
            <NavItem className="d-sm-flex d-md-none">
              <NavLink href="/">Ashwarya</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        {/* Avatar - Only for Medium and Above */}
        <NavbarBrand className="d-none d-md-flex align-center">
          Avatar <MapPinCheck />
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
