import React from "react";
import Header from "@/components/page/header";
import Sidebar from "@/components/page/sidebar";
import styles from "@/styles/sidebar.module.css"

const Layout = ({children}) => {

    return(
      <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
                    <Sidebar />
                  <div className={`${styles.content} col-md-9`}>
                      {children}
                  </div>
            </div>
          </div>
      </div>
    )
}

export default Layout;