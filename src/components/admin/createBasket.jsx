'use client';

import { setSelectedBasket } from "@/store/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import basketData from "@/app/admin/basket/basket.json"
import Link from "next/link";
import { useEffect, useState } from "react";
import { getEquityPrice } from "@/app/api/basket/route";

const CreateBasket = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const [ basketId, setBasketId ] = useState(null);

  useEffect( () => {
    setBasketId(getEquityPrice());
  }, [])

  return (
    loggedIn 
    ? (<div className="container">

      {/* User Basket */}
      <h5 className="my-2 fw-bold">Create Basket</h5>

      {/* Investment row */}
      <div className="d-flex justify-content-between mb-2">
        <div className="input-group input-group-sm me-5">
          <span className="input-group-text" id="inputGroup-sizing-sm">Enter Amount</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm me-5">
          <span className="input-group-text" id="inputGroup-sizing-sm">Investment Amount</span>
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
              <th scope="col" style={{width: '30%'}}>Constituents</th>
              <th scope="col" style={{width: '15%'}}>Exchange</th>
              <th scope="col" style={{width: '15%'}}>Order Type</th>
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
                    <option value="1">{basketData.basket[0].constituents[0]}</option>
                    <option value="2">{basketData.basket[0].constituents[1]}</option>
                    <option value="3">{basketData.basket[0].constituents[2]}</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">{basketData.basket[0].exchange[0]}</option>
                      <option value="2">{basketData.basket[0].exchange[1]}</option>
                    </select>
                </div>
              </td>
              <td>
                <div>
                    <select className="form-select w-75 fs-6">
                      <option value="1">{basketData.basket[0].orderType[0]}</option>
                      <option value="2">{basketData.basket[0].orderType[1]}</option>
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