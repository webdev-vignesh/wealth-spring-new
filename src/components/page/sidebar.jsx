'use client';

import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/sidebar.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/userSlice";
import { setLoggedIn } from "@/store/authSlice";


const Sidebar = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [id, setId] = useState(null);

    const dynamicStyle = (divId) => {
        if(id == divId){
            return { backgroundColor: "#1F9C9D"}
        }
    }


    return(
            <div className={` ${styles.sidebar} text-light`} style={{backgroundColor: '#303056'}} id="sidebarNav">

                <div className={`offcanvas-md offcanvas-start`} tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">

                    {/* Offcanvas header */}
                    <div className="offcanvas-header">
                        <div></div>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                    </div>

                    {/* Offcanvas body */}
                    <div className="offcanvas-body d-flex flex-column ">
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
                        <div className="dropup-center dropup" style={{position: 'absolute', bottom: '10%'}}>
                            <Link className="px-3 pb-3 nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                                <i className="bi bi-person-circle"></i> <span >Admin</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">About</a></li>
                                <li>
                                    <button className="dropdown-item" onClick={() => {
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
    )
}

export default Sidebar;