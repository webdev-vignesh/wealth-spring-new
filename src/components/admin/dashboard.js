import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setData } from "@/store/dataSlice";
import Layout from "@/pages/admin";
import DashCards from "../dashCards";

const DashboardPage = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(()=> {
    async function getData () {
      const response = await fetch("/api/user");
      const data = await response.json();
      setData(data);
    }
    getData();
  })

  return (
    (loggedIn)  
    ?
    (<div className="mt-5 ms-5 w-100">
      {/* Page Name */}
      <Head>
        <title>Wealth Spring | Admin Dashboard</title>
        <meta property="og:title" content="Wealth Spring | Admin Dashboard" key="title" />
      </Head>

      {/* Dashboard */}
      <DashCards />

    </div>)
    : (<div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='/'>login</Link></p>
      </div>
    )
  );
};

export default DashboardPage;
