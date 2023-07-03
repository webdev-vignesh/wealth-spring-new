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
  
  const [ exchange, setExchange] = useState('');
  const [ orderType, setOrderType ] = useState('');
  const [ constituent, setConstituent ] = useState('');
  const [ equityPrice, setEquityPrice ] = useState(null);
  const [ totalAmount, setTotalAmount ] = useState(null);
  let [ weight, setWeight ] = useState(null);
  let [ quantity, setQuantity ] = useState(null);
  let [ data, setData ] = useState([]);
  let [ rowData, setRowData ] = useState(
    [
      {
        'constituents': data.map((instrument, index) => instrument.instrumentNmae),
    
      }
    ]);
  let [ rows, setRows ] = useState(1);
  const basketTemplate = [
      {
        "constituents" : [],
        "exchange": ["BSE", "NSE"],
        "orderType": ["Buy", "Sell"]
    }
  ]

  async function getPrice() {
    let result = await getEquityPrice(constituent, exchange);
    setEquityPrice(result);
  }

  async function weightAge(value){
    setWeight(value);
    let qty = sendWeightage({weight, totalAmount, equityPrice});
    setQuantity(qty);
  }

  useEffect( () => {async () => {
    let details = await getInstrumentDetails();
    setData(details);
  }}, [])

  return (
    loggedIn 
    ? (<div className="container mt-4">

      {/* User Basket */}
      <h6 className="my-2 fw-bold">Create Basket</h6>

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
          <label className="input-group-text" htmlFor="inputGroupSelect01">Select Basket</label>
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
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    
      {/* Orders Row */}
      
      {/* Orders Table */}
      <div style={{overflowY: 'auto', height: '70vh'}}>
        <table className="table table-hover table-bordered" style={{fontSize: 14}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" style={{width: '30%'}}>Constituents</th>
              <th scope="col" style={{width: '20%'}}>Exchange</th>
              <th scope="col" style={{width: '20%'}}>Order Type</th>
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
                      <select className="form-select w-75 " name="constituents" onChange={(e) => setConstituent(e.target.value)} style={{fontSize: 12}} >
                        <option value="" selected disabled>-Select-</option>
                        {rowData.map((data, index) => {
                          return <option value={data.isinNo} key={index}>{data.instrumentName}</option>
                        })}
                        {/* <option value="1">{basketTemplate[0].constituents[0]}</option>
                        <option value="2">{basketTemplate[0].constituents[1]}</option>
                        <option value="3">{basketTemplate[0].constituents[2]}</option> */}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <select className="form-select w-75 " name="exchange" style={{fontSize: 12}} onChange={(e) => {
                        setExchange(e.target.value);
                        getPrice();
                      }}>
                        <option value="" selected disabled>-Select-</option>
                        <option value="BSE">{basketTemplate[0].exchange[0]}</option>
                        <option value="NSE">{basketTemplate[0].exchange[1]}</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <select className="form-select w-75 " name="orderType" style={{fontSize: 12}} onChange={(e) => setOrderType(e.target.value)}>
                        <option value="" selected disabled>-Select-</option>
                        <option value="Buy">{basketTemplate[0].orderType[0]}</option>
                        <option value="Sell">{basketTemplate[0].orderType[1]}</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input type="text" className="form-control w-75" style={{fontSize: 12}} onChange={(e) => weightAge(e.target.value)} />
                    </div>
                  </td>
                  <td style={{fontSize: 12}}>{equityPrice}</td>
                  <td style={{fontSize: 12}}>{quantity}</td>
                  <td style={{fontSize: 12}}></td>
                  <td>
                    <div className="d-flex">
                      <button
                      className="btn btn-sm btn-outline-danger me-2"
                        onClick={() => {
                          setRows(--rows);
                        }}
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                      <button
                      className="btn btn-sm btn-outline-success"
                        onClick={() => {
                          setRows(--rows);
                        }}
                      >
                        <i className="bi bi-check2"></i>
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