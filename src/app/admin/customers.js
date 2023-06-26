import Layout from "./page";
import CustomerDetails from "@/components/admin/customerDetails";

const Customers = () => {
    return(
        <div>
            <Layout>
                <div style={{height: '80vh'}}>
                    <CustomerDetails />
                </div>
            </Layout>
        </div>
    )
}

export default Customers;