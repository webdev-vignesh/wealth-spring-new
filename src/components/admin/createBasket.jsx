'use client';

import { setSelectedBasket } from "@/store/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import basketData from "@/app/admin/basket/basket.json"
import Link from "next/link";
import { useEffect, useState } from "react";
import { getEquityPrice, getInstrumentDetails, sendWeightage } from "@/app/api/basket/route";

const CreateBasket = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const [ equityPrice, setEquityPrice ] = useState(null);
  const [ totalAmount, setTotalAmount ] = useState(null);
  let [rows, setRows] = useState(1);
  let [weight, setWeight] = useState(null);
  let [rowData, setRowData] = useState([]);
  const basketTemplate = [
      {
        "constituents" : [],
        "exchange": [],
        "orderType": ["Buy", "Sell"]
    }
  ]

  async function getPrice(value) {
    let result = await getEquityPrice(value);
    setEquityPrice(result);
  }

  async function weightAge(value){
    setWeight(value);
    sendWeightage({weight, totalAmount, equityPrice})
  }

  useEffect( async () => {
    setRowData(await getInstrumentDetails());
  }, [])

  return (
    loggedIn 
    ? (<div className="container mt-4">

      {/* User Basket */}
      <h5 className="my-2 fw-bold">Create Basket</h5>

      {/* Investment row */}
      <div className="d-flex justify-content-between mb-2">
        <div className="input-group input-group-sm me-5">
          <span className="input-group-text" id="inputGroup-sizing-sm">Enter Amount</span>
          <input type="number" onChange={(e) => setTotalAmount(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm me-5">
          <span className="input-group-text" id="inputGroup-sizing-sm">Investment Amount</span>
          <input disabled type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Create Basket</label>
          <select className="form-select" id="inputGroupSelect01" onChange={(e) => {dispatch(setSelectedBasket(e.target.value))}}>
            <option value="1">Basket 1</option>
            <option value="2">Basket 2</option>
            <option value="3">Basket 3</option>
            <option value="new">New Basket</option>
          </select>
        </div>
        <div className="ms-2">
          <button className="btn btn-sm btn-success"
            onClick={() => {
              setRows(++rows);
            }}
          >
            <i class="bi bi-plus-lg"></i>
          </button>
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
              <th scope="col" style={{width: '15%'}}>Price &#8377;</th>
              <th scope="col" style={{width: '10%'}}>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
            <tbody>

              {/* Iterating the JSON object to show certain no.of rows based on length */}
              {Array.from({ length: rows }, (_, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <div>
                      <select className="form-select w-75 fs-6" name="constituents" onChange={(e) => getPrice(e.target.value)} >
                        <option value="" selected disabled>Select a Constituent</option>
                        {rowData.map((data, index) => {
                          <option value={data.isinNo} key={index}>{data.instrumentName}</option>
                        })}
                        {/* <option value="1">{basketTemplate[0].constituents[0]}</option>
                        <option value="2">{basketTemplate[0].constituents[1]}</option>
                        <option value="3">{basketTemplate[0].constituents[2]}</option> */}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <select className="form-select w-75 fs-6" name="exchange">
                      <option value="" selected disabled>Select a Exchange</option>
                      {rowData.map((data, index) => {
                          <option value={data.isinNo} key={index}>{data.instrumentName}</option>
                        })}
                      {/* <option value="">Select Exchange</option>
                      <option value="1">{basketTemplate[0].exchange[0]}</option>
                      <option value="2">{basketTemplate[0].exchange[1]}</option> */}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <select className="form-select w-75 fs-6" name="orderType">
                        <option value="" selected disabled>Select Order Type</option>
                        <option value="1">{basketTemplate[0].orderType[0]}</option>
                        <option value="2">{basketTemplate[0].orderType[1]}</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input type="text" className="form-control w-75" onChange={(e) => weightAge(e.target.value)} />
                    </div>
                  </td>
                  <td>{setEquityPrice}</td>
                  <td>12</td>
                  <td>33940.8</td>
                  <td>
                    <div className="d-flex">
                      <button
                      className="btn btn-sm btn-outline-danger me-2"
                        onClick={() => {
                          setRows(--rows);
                        }}
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <button
                      className="btn btn-sm btn-outline-success"
                        onClick={() => {
                          setRows(--rows);
                        }}
                      >
                        <i class="bi bi-check2"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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