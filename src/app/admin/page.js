import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const Layout = ({children}) => {

    return(
      <div style={{position: 'relative'}}>
          <Header />
          <Sidebar/>
          <div style={{position: 'absolute' ,left: '220px', top: '80px', width: '75vw', height: '75%'}}>
              {children}
          </div>
      </div>
    )
}

export default Layout;