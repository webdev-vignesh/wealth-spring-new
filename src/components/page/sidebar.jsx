import React from "react";
import Link from "next/link";
import styles from "@/styles/sidebar.module.css"

const Sidebar = () => {
    return(
        <div className={` ${styles.sidebar} text-light`} style={{backgroundColor: '#303056'}} id="sidebarNav">
            
            {/* OffCanvas show in medium click button */}
            <div className="d-md-none float-end">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                    <i className="bi bi-list"></i>
                </button>
            </div>

            <div className="offcanvas-md offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <div></div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
            <div className="offcanvas-body d-flex flex-column ">
                <div className="">
                    <div className="navbar-nav">
                        <div>
                            <Link className=" nav-link" style={{marginLeft: '20px', fontSize: '14px'}} href='/admin/dashboard'>
                                <i className="bi bi-house-door"></i> <span>Home</span>
                            </Link>
                        </div>
                        <div>
                            <Link className=" nav-link" style={{marginLeft: '20px', fontSize: '14px'}} href='/admin/customers'>
                                <i className="bi bi-people"></i> <span className="">Customers</span>
                            </Link>
                        </div>

                        <div className="accordion accordion-flush" id="accordionFlushExample" style={{fontSize: '14px'}}>
                            <div className="accordionItem">
                                <h6 className="accordion-header">
                                    <button  className="accordion-button collapsed text-light" style={{fontSize: '14px', backgroundColor: 'inherit'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <i className="bi bi-basket"></i>&nbsp;Basket
                                    </button>
                                </h6>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <Link className="nav-link" href='/admin/basket'>
                                            <i className="bi bi-people"></i> Create Basket
                                        </Link>
                                        <Link className="nav-link" href='/admin/basket'>
                                            <i className="bi bi-people"></i> View Baskets
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link className=" nav-link" style={{marginLeft: '20px', fontSize: '14px'}} href="#">
                                <i className="bi bi-arrow-left-right"></i> <span >Transactions</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dropup-center dropup" style={{position: 'absolute', bottom: '10%'}}>
                    <Link className="px-3 pb-3 nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                        <i className="bi bi-person-circle"></i> <span >Admin</span>
                    </Link>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Log out</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    //     <div className={`offcanvas offcanvas-start text-bg-dark ${styles.sidebarOffCanvas}`} data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            
    // </div>
    )
}

export default Sidebar;