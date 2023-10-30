import * as React from "react";

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps> {
    public render() {
        return (
            <div className="mobile-header-active mobile-header-wrapper-style">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <a href="index.html">
                                <img src="assets/imgs/theme/logo.svg" alt="logo" />
                            </a>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button className="close-style search-close">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input type="text" placeholder="Search for items…" />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul className="mobile-menu font-heading">
                                    <li className="menu-item-has-children">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="shop-grid-right.html">shop</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Vendors</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Mega menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <a href="#">Womens Fashion</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Dresses
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Blouses & Shirts
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Hoodies & Sweatshirts
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Womens Sets
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Mens Fashion</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Jackets
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Casual Faux Leather
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Genuine Leather
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Technology</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Gaming Laptops
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Ultraslim Laptops
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Tablets
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Laptop Accessories
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-product-right.html">
                                                            Tablet Accessories
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="blog-category-fullwidth.html">Blog</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Pages</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Language</a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">French</a>
                                            </li>
                                            <li>
                                                <a href="#">German</a>
                                            </li>
                                            <li>
                                                <a href="#">Spanish</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info">
                                <a href="page-contact.html">
                                    <i className="fi-rs-marker"></i> Our location
                                </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="page-login.html">
                                    <i className="fi-rs-user"></i>Log In / Register
                                </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="#">
                                    <i className="fi-rs-headphones"></i>(+01) - 2345 - 6789
                                </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <a href="#">
                                <img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" />
                            </a>
                            <a href="#">
                                <img
                                    src="assets/imgs/theme/icons/icon-instagram-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="#">
                                <img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" />
                            </a>
                        </div>
                        <div className="site-copyright">
                            Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
