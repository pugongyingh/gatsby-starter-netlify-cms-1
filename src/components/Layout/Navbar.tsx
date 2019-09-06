import { Link } from "gatsby";
import React, { useState } from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";
import menuIcon from "../../img/hamburger-menu-icon.svg";
import { SCP } from "../../styles/theme";

interface P extends SCP {}

const NavbarTemplate: React.SFC<P> = ({ className }) => {
  const [active, setActive] = useState();
  const toggleActive = () => setActive(!active);

  // Smooth Scroll
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
  }

  return (
    <nav className={className} role="navigation" aria-label="main-navigation">
      <Grid className="grid-wrap">
        <div className="mobile-nav-wrap">
          <div className="navbar-brand" />
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${active && "is-active"}`}
            data-target="navMenu"
            onClick={toggleActive}
          />
        </div>
        <div id="navMenu" className={`navbar-menu ${active && "is-active"}`}>
          <Link to="/#what-we-do" className="navbar-item">
            What We Do
          </Link>
          <Link to="/#references" className="navbar-item">
            References
          </Link>
          <Link to="/#blog" className="navbar-item">
            Blog
          </Link>
          <Link to="/#contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </Grid>
    </nav>
  );
};

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

  .grid-wrap {
    @media (max-width: 768px) {
      width: 100%;
    }

    @media ${props => props.theme.screen.laptopL} {
      width: 1410px;
    }

    .mobile-nav-wrap {
      display: flex;
    }
  }

  .navbar-brand {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 3.25rem;

    /* hiding from tablet and larger devices */
    @media ${props => props.theme.screen.laptop} {
      display: none;
    }
  }

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

  .navbar-menu {
    /* display none by default --> onClick show MENU */
    display: none;
    text-align: center;

    @media ${props => props.theme.screen.laptop} {
      display: flex;
      justify-content: flex-end;
      position: relative;
      top: 40px;
    }
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

    :not(:last-child) {
      margin-right: 17px;
    }
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
    position: absolute;
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
