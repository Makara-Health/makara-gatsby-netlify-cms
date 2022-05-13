import React from "react";
import {Link} from "gatsby";
import logo from "../img/logo-makara.svg";

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: "",
        };
    }

    toggleHamburger() {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: "is-active",
                    })
                    : this.setState({
                        navBarActiveClass: "",
                    });
            }
        );
    }

    render() {
        return (
            <nav className="bg-blue px-2 sm:px-4 py-5" role="navigation" aria-label="main-navigation">
                <div className="container max-w-6xl flex flex-wrap justify-between items-center mx-auto">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" title="Logo">
                            <img src={logo} alt="Makara" style={{width: "155px"}}/>
                        </Link>
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            role="menuitem"
                            tabIndex={0}
                            onKeyPress={() => this.toggleHamburger()}
                            onClick={() => this.toggleHamburger()}
                        >
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                    <div id="navMenu" className={`md:ml-auto flex flex-wrap items-center text-base justify-center ${this.state.navBarActiveClass}`}>
                        <div className="navbar-start montserrat">
                            <Link className="navbar-item mr-12 text-white font-semibold hover:text-turquoise" to="/about">
                                About us
                            </Link>
                            <Link className="navbar-item mr-12 text-white font-semibold hover:text-turquoise" to="/team">
                                Our team
                            </Link>
                            <Link className="navbar-item mr-12 text-white font-semibold hover:text-turquoise" to="/work">
                                Our work
                            </Link>
                            <Link className="navbar-item mr-12 text-white font-semibold hover:text-turquoise" to="/blog">
                                Our blog
                            </Link>
                            <Link className="navbar-item mr-12 text-white font-semibold hover:text-turquoise" to="/careers">
                                Careers
                            </Link>
                            <Link className="navbar-item text-white font-semibold hover:text-turquoise" to="/contact/examples">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
