import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/KEOMLOGO.webp";
import CustomButton from "./Button.jsx";
import Contact from "../Pages/Contact.jsx";

function NavLinks() {
  const location = useLocation();

  return (
    <Navbar fluid className="sticky top-0 z-50 !pl-10 !pr-10 !border-b !border-sky-200 !bg-white">
      <NavbarBrand as={Link} to="/" className="p-0 border-0">
        <img src={logo} alt="Logo" className="h-10 rounded-lg md:h-14 md:w-40 pl-2 pr-2" />
      </NavbarBrand>

      <div className="flex md:order-2 gap-2">
        <CustomButton
          as={Link}
          to="/contact"
          className="!bg-sky-400 hover:!bg-sky-600 !border !border-sky-600 !ring-0 focus:!ring-0 !transition-colors !duration-300"
        >
          Get started
        </CustomButton>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink
          as={Link}
          to="/"
          active={location.pathname === "/"}
          className={`!px-4 !py-2 !rounded-lg !transition-colors !duration-300
    ${
      location.pathname === "/"
        ? "!text-white md:!bg-sky-500" 
        : "!text-black hover:!text-white md:hover:!bg-sky-400" 
    }
  `}
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/about"
          active={location.pathname === "/about"}
          className={`!px-4 !py-2 !rounded-lg !transition-colors !duration-300
    ${
      location.pathname === "/about"
        ? "!text-white md:!bg-sky-500" 
        : "!text-black hover:!text-white md:hover:!bg-sky-400" 
    }
  `}
        >
          About
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/services"
          active={location.pathname === "/services"}
          className={`!px-4 !py-2 !rounded-lg !transition-colors !duration-300
    ${
      location.pathname === "/services"
        ? "!text-white md:!bg-sky-500" 
        : "!text-black hover:!text-white md:hover:!bg-sky-400" 
    }
  `}
        >
          Services
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/contact"
          active={location.pathname === "/contact"}
          className={`!px-4 !py-2 !rounded-lg !transition-colors !duration-300
    ${
      location.pathname === "/contact"
        ? "!text-white md:!bg-sky-500"
        : "!text-black hover:!text-white md:hover:!bg-sky-400" 
    }
  `}
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavLinks;
