'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/userSlice";
import { setLoggedIn } from "@/store/authSlice";
import Link from "next/link";

const Header = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [id, setId] = useState(null);

    const dynamicStyle = (divId) => {
        if(id == divId){
            return { backgroundColor: "#1F9C9D"}
        }
    }

    return(
        <div>
            {/* Navbar component */}
            <nav className="navbar navbar-expand-md text-light" style={{backgroundColor: "#303056"}} >
                <div className="container-fluid d-flex">

                    {/* Left side OffCanvas block */}
                    <div className="d-block d-md-none">

                        {/* OffCanvas button */}
                        <button className="btn btn-link text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i className="bi bi-list"></i>
                        </button>

                        {/* OffCanvas component */}
                        <div className="offcanvas offcanvas-start vw-25" style={{backgroundColor: '#303056'}} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            
                            {/* OffCanvas header */}
                            <div className="offcanvas-header">
                                <div></div>
                                <button type="button" className="btn btn-link text-light" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>

                            {/* OffCanvas body */}
                            <div className="offcanvas-body d-flex flex-column">
                                <div className="">
                                    <div className="navbar-nav">
                                        <div style={dynamicStyle(1)}>
                                            <Link legacyBehavior className=" nav-link" href='/admin'>
                                                <a style={{textDecoration: 'none', color: 'white', marginLeft: '20px', fontSize: '14px'}}
                                                onClick={
                                                    () => {
                                                        setId(1);
                                                    }
                                                }
                                                >
                                                    <i className="bi bi-house-door"></i> <span>Home</span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={`mt-2 `}  style={dynamicStyle(2)}>
                                            <Link legacyBehavior className=" nav-link" href='/admin/customers'>
                                                <a style={{textDecoration: 'none', color: 'white', marginLeft: '20px', fontSize: '14px'}}
                                                onClick={
                                                    () => {
                                                        setId(2);
                                                    }
                                                }
                                                >
                                                    <i className="bi bi-people"></i> <span>Customers</span>
                                                </a>
                                            </Link>
                                        </div>

                                        {/* Accordion */}
                                        <div className="accordion accordion-flush" id="accordionFlushExample" style={{fontSize: '14px'}}>
                                            <div className="accordionItem">
                                                <h6 className="accordion-header">
                                                    <button  className="accordion-button collapsed text-light" style={{fontSize: '14px', backgroundColor: 'inherit'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <i className="bi bi-basket"></i>&nbsp;Basket
                                                    </button>
                                                </h6>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div  style={dynamicStyle(3)}>
                                                            <Link legacyBehavior className="nav-link" href='/admin/basket'>
                                                                <a style={{textDecoration: 'none', color: 'white', marginLeft: '20px', fontSize: '14px'}}
                                                                onClick={
                                                                    () => {
                                                                        setId(3);
                                                                    }
                                                                }
                                                                >
                                                                    <i className="bi bi-people"></i> Create Basket
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="mt-2" style={dynamicStyle(4)}>
                                                            <Link legacyBehavior className="nav-link" href='/admin'>
                                                                <a style={{textDecoration: 'none', color: 'white', marginLeft: '20px', fontSize: '14px'}}
                                                                    onClick={
                                                                        () => {
                                                                            setId(4);
                                                                        }
                                                                    }
                                                                    >
                                                                        <i className="bi bi-people"></i> View Baskets
                                                                    </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={dynamicStyle(5)}>
                                            <Link legacyBehavior className="nav-link" href='/admin'>
                                                <a style={{textDecoration: 'none', color: 'white', marginLeft: '20px', fontSize: '14px'}}
                                                    onClick={
                                                        () => {
                                                            setId(5);
                                                        }
                                                    }
                                                    >
                                                        <i className="bi bi-arrow-left-right"></i> Transactions
                                                    </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Admin option */}
                                <div className="dropup-center dropup text-light" style={{position: 'absolute', bottom: '10%', fontSize: '14px'}}>
                                    <Link className="px-3 pb-3 nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                                        <i className="bi bi-person-circle"></i> <span >Admin</span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" style={{fontSize: '14px'}}>About</a></li>
                                        <li>
                                            <button className="dropdown-item" 
                                            style={{fontSize: '14px'}}
                                            onClick={() => {
                                                dispatch(setLoggedIn(false));
                                                dispatch(setUser(''));
                                                router.push('/');
                                            }}> 
                                                Log out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Left side element - Logo */}
                    <Image src='/logo.png' width='160' height='50' alt='logo' />

                    {/* Middle element - Search bar */}
                    <form className="d-flex ms-10 d-none d-md-block" role="search">
                        <div className="input-group">
                            <input className="form-control" type="search" style={{fontSize: '14px'}} placeholder="Search" aria-label="Search a Person, data" aria-describedby="button-addon1" id="button-addon1" />
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
                            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: '14px'}}>
                                Admin <i className="bi bi-person-circle"></i>
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#" style={{fontSize: '14px'}}>About</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li>
                                    <button className="dropdown-item" 
                                    style={{fontSize: '14px'}}
                                    onClick={() => {
                                        dispatch(setLoggedIn(false));
                                        dispatch(setUser(''));
                                        router.push('/');
                                    }}>
                                        Log out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;