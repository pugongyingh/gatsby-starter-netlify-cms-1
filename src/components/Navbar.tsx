import { Link } from "gatsby";
import React from "react";

class Navbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  public toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );
  };

  public render() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]');
    }

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src="" alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link to="/#my-cool-header" className="navbar-item">
                SmoothScroll
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src="" alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
