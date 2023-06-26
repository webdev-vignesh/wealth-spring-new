import Image from "next/image";
import React from "react";

const Header = () => {
    return(
        <div style={{position: 'fixed', width: '100%', zIndex: 10}}>
            <nav className="navbar text-light bg-dark" >
                <div className="container-fluid d-flex">
                    <Image src='/logo.png' width='160' height='50' alt='logo' />

                    <form className="d-flex ms-10" role="search">
                    <div className="input-group">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search a Person, data" aria-describedby="button-addon1" id="button-addon1" />
                        <button className="btn text-bg-light" type="submit" id="button-addon2">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                    </form>

                    <div className="d-flex">
                        <span>
                            <i class="bi bi-bell me-4"></i>
                        </span>
                        <div className="dropdown">
                        <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin <i className="bi bi-person-circle"></i>
                        </div>
                        <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">About</a></li>
                            <li><hr className="dropdown-divider" /></li>
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