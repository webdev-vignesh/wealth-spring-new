import React from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
    return(
        <div className={`offcanvas offcanvas-start text-bg-dark ${styles.sidebarOffCanvas}`} data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            
            <div className="offcanvas-body px-0">
                <nav className="nav-dark">
                <div className="navbar-nav">
                    <div className="text-uppercase fw-bold px-3">Services</div>
                    <Link className="px-3 nav-link mb-2" href='/admin/dashboard'>
                        <i class="bi bi-house-door"></i> <span className="mt-3">Home</span>
                    </Link>
                    <Link className="px-3 nav-link mb-2" href='/admin/customers'>
                        <i className="bi bi-people"></i> <span className="mt-3">Customers</span>
                    </Link>

                    <div className="accordion accordion-flush " id="accordionFlushExample">
                        <div className="accordionItem">
                            <h2 className="accordion-header">
                                <button  className={`${styles.accordionButton} accordion-button bg-dark collapsed text-white`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <i class="bi bi-basket"></i>&nbsp;Basket
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <Link className="px-3 nav-link" href='/admin/basket'>
                                        <i className="bi bi-people"></i> Create Basket
                                    </Link>
                                    <Link className="px-3 nav-link" href='/admin/basket'>
                                        <i className="bi bi-people"></i> View Baskets
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link className="px-3 nav-link" href="#">
                        <i className="bi bi-arrow-left-right"></i> <span >Transactions</span>
                    </Link>
                </div>
            </nav>
        </div>
        <div class="dropup-center dropup">
            <Link className="px-3 pb-3 nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                <i className="bi bi-person-circle"></i> <span >Admin</span>
            </Link>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">About</a></li>
                <li><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Sidebar;