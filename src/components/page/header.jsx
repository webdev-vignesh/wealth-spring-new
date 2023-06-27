import Image from "next/image";
import React from "react";

const Header = () => {
    return(
        <div>
            {/* Navbar component */}
            <nav className="navbar navbar-expand-md text-light" style={{backgroundColor: "#303056"}} >
                <div className="container-fluid d-flex">

                    <div className="d-md-none">
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                    
                    {/* Left side element - Logo */}
                    <Image src='/logo.png' width='160' height='50' alt='logo' />

                    {/* Middle element - Search bar */}
                    <form className="d-flex ms-10 d-none d-md-block" role="search">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search a Person, data" aria-describedby="button-addon1" id="button-addon1" />
                            <button className="btn text-bg-light" type="submit" id="button-addon2">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>

                    {/* Right side element */}
                    <div className="d-flex">
                        {/* Notification icon */}
                        <span>
                            <i className="bi bi-bell me-4"></i>
                        </span>
                        {/* Admin dropdown button */}
                        <div className="dropdown">
                            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin <i className="bi bi-person-circle"></i>
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">About</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="#">Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;