import { setSelectedBasket } from "@/store/basketSlice";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

const CreateBasket = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  return (
    loggedIn 
    ? (<div className="container">

      {/* User Basket */}
      <h5 className="mb-2 fw-bold">Create Basket</h5>

      {/* Investment row */}
      <div className="d-flex justify-content-between mb-2">
        <div className="input-group input-group-sm me-5">
          <span className="input-group-text" id="inputGroup-sizing-sm">Enter Investment Amount</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm me-5">
          <span className="input-group-text" id="inputGroup-sizing-sm">Total Investment Amount</span>
          <input disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Choose /Create Basket</label>
          <select className="form-select" id="inputGroupSelect01" onChange={(e) => {dispatch(setSelectedBasket(e.target.value))}}>
            <option value="1">Basket 1</option>
            <option value="2">Basket 2</option>
            <option value="3">Basket 3</option>
            <option value="new">New Basket</option>
          </select>
        </div>
      </div>
    
      {/* Orders Row */}
      
      {/* Orders Table */}
      <div style={{overflowY: 'auto', height: '70vh'}}>
        <table className="table table-hover table-bordered border-dark fs-6">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Constituents</th>
              <th scope="col">Exchange</th>
              <th scope="col">Order Type</th>
              <th scope="col" style={{width: '15%'}}>Weights %</th>
              <th scope="col" style={{width: '15%'}}>Current Price &#8377;</th>
              <th scope="col" style={{width: '10%'}}>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>

            {/* table 1 */}
            <tr>
              <th scope="row">1</th>
              <td>
                <div>
                  <select className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>2828.40</td>
              <td>12</td>
              <td>33940.8</td>
            </tr>

            {/* table 2 */}
            <tr>
            <th scope="row">2</th>
              <td>
                <div>
                  <select  defaultValue={'2'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select  defaultValue={'2'} className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>2356.35</td>
              <td>6</td>
              <td>14138.1</td>
            </tr>

            {/* table 3 */}
            <tr>
            <th scope="row">3</th>
              <td>
                <div>
                  <select  defaultValue={'3'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>365.20</td>
              <td>32</td>
              <td>11686.4</td>
            </tr>

            {/* table 4 */}
            <tr>
            <th scope="row">4</th>
              <td>
                <div>
                  <select defaultValue={'4'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>170.00</td>
              <td>32</td>
              <td>5440</td>
            </tr>

            {/* table 5 */}
            <tr>
            <th scope="row">5</th>
              <td>
                <div>
                  <select defaultValue={'5'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select defaultValue={'2'} className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>1072.85</td>
              <td>7</td>
              <td>7509.95</td>
            </tr>

            {/* table 6 */}
            <tr>
            <th scope="row">6</th>
              <td>
                <div>
                  <select defaultValue={'6'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select defaultValue={'2'} className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>2324.65</td>
              <td>6</td>
              <td>13947.9</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>

            {/* table 7 */}
            <tr>
            <th scope="row">7</th>
              <td>
                <div>
                  <select defaultValue={'7'} className="form-select w-75 fs-6">
                    <option value="1">Asian Paints Ltd</option>
                    <option value="2">Reliance Industries Ltd</option>
                    <option value="3">La Opala RG Ltd</option>
                    <option value="4">Reddington India Ltd</option>
                    <option value="5">Indigo Paints</option>
                    <option value="6">Akzo Nobel</option>
                    <option value="7">BPL limited</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">BSE</option>
                      <option value="2">NSE</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">Buy</option>
                      <option value="2">Sell</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                <input type="text" className="form-control w-75" />  
                </div>
              </td>
              <td>59.70</td>
              <td>24</td>
              <td>1432.8</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>)

    : (<div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='../auth/login'>login</Link></p>
      </div>
    )
  );
};

export default CreateBasket;