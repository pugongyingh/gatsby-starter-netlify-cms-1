import classNames from "classnames";
import { Link } from "gatsby";
import GatsbyLink from "gatsby-link";
import React, { useEffect, useState } from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";
import { Maybe } from "../../graphql/types";
import logo from "../../img/starkys-logo-proper.svg";
import { SCP } from "../../styles/theme";
import PreviewCompatibleImage from "../CMS/PreviewCompatibleImage";

interface P extends SCP {
  fixed?: boolean;
  locale: Maybe<string>;
  title?: string;
}

const NavbarTemplate: React.SFC<P> = ({ className, locale, fixed, title }) => {
  const [active, setActive] = useState();
  const toggleActive = () => setActive(!active);

  const [scroll, setScroll] = useState(0);

  const Logo = (
    <PreviewCompatibleImage
      className="starkyslogo"
      image={logo}
      alt="Starkys Logo"
    />
  );

  const LogoMobile = (
    <a href="#">
      <PreviewCompatibleImage
        className="starkyslogo--mobile"
        image={logo}
        alt="Starkys Logo"
      />
    </a>
  );

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  // Smooth Scroll
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
  }

  const isFixed =
    fixed || (typeof window !== "undefined" && scroll > window.innerHeight);

  return (
    <nav
      className={classNames(className, {
        "is-active": active,
        "is-fixed": isFixed
      })}
      role="navigation"
      aria-label="main-navigation"
    >
      <Grid className="grid-wrap">
        {isFixed ? (
          <GatsbyLink to="/#" replace={false}>
            {Logo}
          </GatsbyLink>
        ) : null}

        {title ? <h1>{title}</h1> : null}
        <div className="mobile-nav-wrap">
          <div className="navbar-brand" />
          {/* Hamburger menu */}
          <div
            className={`ham-menu ${active && "is-active"}`}
            data-target="navMenu"
            onClick={toggleActive}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${classNames(className, {
            "is-active": active,
            "navbar-menu--fixed": isFixed
          })}`}
        >
          <Link
            onClick={toggleActive}
            to="/#what-we-do"
            className="navbar-item"
          >
            {locale === "cs" ? "Co děláme" : "What We Do"}
          </Link>
          <Link
            onClick={toggleActive}
            to="/#references"
            className="navbar-item"
          >
            {locale === "cs" ? "Reference" : "References"}
          </Link>
          <Link onClick={toggleActive} to="/#blog" className="navbar-item">
            Blog
          </Link>
          <Link onClick={toggleActive} to="/#contact" className="navbar-item">
            {locale === "cs" ? "Kontakt" : "Contact"}
          </Link>
        </div>
      </Grid>
      {isFixed ? LogoMobile : null}
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
  background: RGB(40, 53, 69, 0);
  position: absolute;
  color: ${props => props.theme.colors.white};
  /* flex-basis: 100%; */

  &.is-active {
    background: ${props => props.theme.colors.darkGreen};
    transition: 0.25s;

    @media ${props => props.theme.screen.laptop} {
      background: none;
    }
  }

  &.is-fixed {
    position: fixed;
    background: ${props => props.theme.colors.darkGreen};
    transition: 0.25s all;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

    @media ${props => props.theme.screen.laptop} {
      height: 70px;
    }

    @media ${props => props.theme.screen.laptopL} {
      height: 120px;
    }

    @media ${props => props.theme.screen.laptop} {
      .navbar-menu {
        display: flex;
      }
    }
  }

  @media ${props => props.theme.screen.laptop} {
    background: none;
  }

  .starkyslogo {
    max-height: 90px;

    &--mobile {
      position: absolute;
      top: 8px;
      right: 20px;
      height: 35px;
      z-index: 50;

      @media ${props => props.theme.screen.tablet} {
        display: none;
      }
    }
  }

  .grid-wrap {
    @media (max-width: 768px) {
      width: 100%;
    }

    img {
      display: none;
    }

    h1 {
      display: none;
    }

    @media ${props => props.theme.screen.laptopL} {
      width: 1410px;
      align-items: center;
      display: flex;
      /* border: 1px solid; */

      img {
        display: inline-block;
        margin-top: 16px;
      }

      h1 {
        display: inline-block;
        font-size: 2.2rem;
        margin-left: 2rem;
        padding-left: 2rem;
        border-left: 1px solid;
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    .mobile-nav-wrap {
      display: flex;

      @media ${props => props.theme.screen.laptop} {
        display: none;
      }
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

  .ham-menu {
    width: 50px;
    height: 50px;
    z-index: 40;

    span {
      display: block;
      position: absolute;
      height: 5px;
      width: 35px;
      background: ${props => props.theme.colors.white};
      border-radius: 5px;
      opacity: 1;
      left: 13px;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 11px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 22px;
      }
      &:nth-child(4) {
        top: 34px;
      }
    }
    &.is-active span {
      &:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 0%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 0%;
      }
    }
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
      align-items: center;

      /* border: 1px solid red; */
      flex-basis: 40%;
      text-align: right;

      &--fixed {
        position: initial;
        align-items: flex-end;
        /* display: flex; */
        flex-direction: row;
      }
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
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    position: relative;

    @media ${props => props.theme.screen.laptop} {
      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }

      color: ${props => props.theme.colors.black};
      :not(:last-child) {
        margin-right: 17px;
      }
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
      padding: 50px 0px 30px;
      justify-content: flex-end;
      &.is-active {
        display: block;
      }
    }
  }

  @media ${props => props.theme.screen.laptop} {
    .navbar,
    .navbar-menu,
    .navbar-start {
      display: inline-block;
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
      display: inline-flex;
      color: ${props => props.theme.colors.white};
    }
    .navbar-menu {
      float: right;
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
