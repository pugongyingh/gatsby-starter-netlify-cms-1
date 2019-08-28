import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import menuIcon from "../../img/hamburger-menu-icon.svg";
import { SCP } from "../../styles/theme";

interface P extends SCP { }

const NavbarTemplate: React.SFC<P> = ({ className }) => {
  const [active, setActive] = useState();
  const toggleActive = () => setActive(!active);

  return (
    <nav className={className} role="navigation" aria-label="main-navigation">
      <div className="navbar-brand">
        {/* Hamburger menu */}
        <div
          className={`navbar-burger burger ${active && "is-active"}`}
          data-target="navMenu"
          onClick={toggleActive}
        />
      </div>
      <div
        id="navMenu"
        className={`navbar-menu ${active && "is-active"}`}
      >
        <Link to="/#my-cool-header" className="navbar-item">
          What We Do
      </Link>
        <Link className="navbar-item" to="/about">
          References
      </Link>
        <Link className="navbar-item" to="/blog">
          Blog
      </Link>
        <Link className="navbar-item" to="/contact">
          Contact
      </Link>
      </div>
    </nav>
  )
}

const Navbar = styled(NavbarTemplate)`
  min-height: 3.25rem;
  z-index: 30;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  top: 0;
  right: 0;
  align-items: flex-end;
  flex-direction: column;

  .navbar-brand {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 3.25rem;

    .navbar-burger {
      cursor: pointer;
      display: block;
      height: 3.25rem;
      position: relative;
      width: 3.25rem;
      margin-left: auto;
      background: url("${menuIcon}") no-repeat;
      background-size: 45px;
      background-position: center;
    }

    /* hiding from tablet and larger devices */
    @media ${props => props.theme.screen.tablet} {
      display: none;
    }
  }

  .navbar-menu {
    display: none;
    text-align: center;
    width: 100%;
  }

  .navbar-item {
    display: block;
    padding: 0.5rem 0.75rem;
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    .navbar > .container {
      display: block;
    }
    .navbar-brand .navbar-item {
      align-items: center;
      display: flex;
    }
    .navbar-menu {
      box-shadow: 0 8px 16px rgba(43, 37, 35, 0.1);
      padding: 0.5rem 0;
      justify-content: flex-end;
      &.is-active {
        display: block;
      }
    }
  }

  @media ${props => props.theme.screen.laptop} {
    position: fixed;
    .navbar,
    .navbar-menu,
    .navbar-start {
      align-items: stretch;
      display: flex;
    }
    .navbar {
      min-height: 3.25rem;
      &.a.navbar-item {
        &:focus,
        &:hover,
        &.is-active {
          background-color: transparent !important;
        }
      }
    }
    .navbar-burger {
      display: none;
    }
    .navbar-item {
      align-items: center;
      display: flex;
      color: ${props => props.theme.colors.white};
    }
    .navbar-menu {
      flex-grow: 1;
      flex-shrink: 0;
      /* justify-content: flex-end; */
      margin-right: 14%;
    }
    .navbar-start {
      justify-content: flex-start;
      margin-right: auto;
    }
    .navbar > .container .navbar-brand,
    .container > .navbar .navbar-brand {
      margin-left: -0.75rem;
    }
    .navbar > .container .navbar-menu,
    .container > .navbar .navbar-menu {
      margin-right: -0.75rem;
    }
    a.navbar-item.is-active {
      color: #2b2523;
      &:not(:focus):not(:hover) {
        background-color: transparent;
      }
    }
  }
`;

export default Navbar;
