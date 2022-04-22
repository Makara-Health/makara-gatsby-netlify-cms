import * as React from "react";
import {Link} from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="">
                <img src={logo} alt="Kaldi"/>
                <section className="">
                    <ul className="">
                        <li>
                            <Link to="/" className="">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/contact/examples">
                                Form Examples
                            </Link>
                        </li>
                        <li>
                            <a className="" href="/admin/" target="_blank" rel="noopener noreferrer">Admin</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <ul className="">
                        <li>
                            <Link className="" to="/blog">
                                Latest Stories
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </section>

                <section>
                    <a title="facebook" href="https://facebook.com">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <a title="twitter" href="https://twitter.com">
                        <img
                            className="fas fa-lg" src={twitter} alt="Twitter"/>
                    </a>
                    <a title="instagram" href="https://instagram.com">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                    <a title="vimeo" href="https://vimeo.com">
                        <img src={vimeo} alt="Vimeo"/>
                    </a>
                </section>
            </footer>
        );
    }
};

export default Footer;
