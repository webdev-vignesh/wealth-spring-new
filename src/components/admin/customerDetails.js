import Link from "next/link";
import { useSelector } from "react-redux";

const CustomerDetails = () => {

    const loggedIn = useSelector((state) => state.auth.loggedIn);

    return(
        loggedIn ? (<div className="container">

            <h5>Customer Details</h5>

            {/* Customer Details table */}
            <div style={{overflowY: 'auto', height: '70vh'}}>
                <table className="table table-hover table-bordered border-dark fs-6"  >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vinod</td>
                            <td>Kumar</td>
                            <td>vinod12@gmail.com</td>
                            <td>9876543210</td>
                        </tr>
                        
                        <tr>
                            <td>2</td>
                            <td>Meera</td>
                            <td>Velu</td>
                            <td>meera@gmail.com</td>
                            <td>9856326985</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Veera</td>
                            <td>Vel</td>
                            <td>veeragg@gmail.com</td>
                            <td>7964852348</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Shriram</td>
                            <td>Kumar</td>
                            <td>shrirams@gmail.com</td>
                            <td>9856327981</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Kumar</td>
                            <td>Vel</td>
                            <td>kumarvv@gmail.com</td>
                            <td>8796579816</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Baskar</td>
                            <td>Shiva</td>
                            <td>baskivek@gmail.com</td>
                            <td>9742836754</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>        
        </div>)
        : (<div className="d-flex row container m-5">
            <p>No authorized Access</p>
            <p>Please <Link href='../auth/login'>login</Link></p>
          </div>
        )
    );
};

export default CustomerDetails;