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
  let [equityData, setEquityData] = useState([]);
  let [rowData, setRowData] = useState([
    {
      constituents: [],
      isinNo: [],
      exchange: null,
      orderType: null,
      weight: null,
      equityPrice: null,
      quantity: null,
      rowAmount: null,
      selectedIsin: "",
      selectedExchange: "",
    },
  ]);
  let [rows, setRows] = useState(1);
  const [basketTemplate, setBasketTemplate] = useState({
    constituents: [],
    isinNo: [],
    exchange: ["BSE", "NSE"],
    orderType: ["Buy", "Sell"],
    weight: null,
    equityPrice: null,
    quantity: null,
    rowAmount: null,
    selectedIsin: "",
    selectedExchange: "",
  });

  async function getPrice(constituent, exchange, index) {
    let result = await getEquityPrice(constituent, exchange);
    const updatedRowData = [...rowData];
    updatedRowData[index].equityPrice = result;
    setRowData(updatedRowData);
  }

  async function weightAge(value){
    setWeight(value);
    let qty = sendWeightage({weight, totalAmount, equityPrice});
    setQuantity(qty);
  }

  const addRow = () => {
    const firstRow = rowData[0];
    const newRow = {
      constituents: [...firstRow.constituents],
      isinNo: [...firstRow.isinNo],
      exchange: firstRow.exchange,
      orderType: firstRow.orderType,
      weight: null,
      equityPrice: null,
      quantity: null,
      rowAmount: null,
      selectedIsin: "",
      selectedExchange: "",
    };
    setRowData([...rowData, newRow]);
    setRows((prevRows) => prevRows + 1);
  };

  const handleDeleteRow = (index) => {
    return () => {
      setRows(rows - 1);
      deleteRow(index);
    };
  };
  
  const deleteRow = (index) => {
    const updatedRowData = [...rowData];
    updatedRowData.splice(index,1);
    setRowData(updatedRowData);
  }

  useEffect(() => {
    const fetchData = async () => {
      let details = await getInstrumentDetails();
      setEquityData(details);
      setRowData([
        {
          constituents: details.map((data) => data.instrumentName),
          isinNo: details.map((data) => data.isinNo),
          exchange: ["BSE", "NSE"],
          orderType: ["Buy", "Sell"],
          weight: null,
          equityPrice: null,
          quantity: null,
          rowAmount: null,
          selectedIsin: "",
          selectedExchange: "",
        },
      ]);
      setBasketTemplate((prevTemplate) => ({
        ...prevTemplate,
        constituents: details.map((data) => data.instrumentName),
        isinNo: details.map((data) => data.isinNo),
      }));
    };
  
    fetchData();
  }, []);

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
            onClick={addRow}
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
              {rowData.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <div>
                      {data.isinNo && data.constituents && (
                      <select className="form-select w-75 " name="constituents"           
                      onChange={(e) => {
                          const updatedRowData = [...rowData];
                          updatedRowData[index].selectedIsin = e.target.value;
                          setRowData(updatedRowData);
                        }}
                        style={{fontSize: 12}} >
                        <option value="" selected disabled>-Select-</option>
                        {data.isinNo.map((isin, idx) => (
                          <option value={isin} key={idx}>
                            {data.constituents[idx]}
                          </option>
                        ))}
                        {/* <option value="1">{basketTemplate[0].constituents[0]}</option>
                        <option value="2">{basketTemplate[0].constituents[1]}</option>
                        <option value="3">{basketTemplate[0].constituents[2]}</option> */}
                      </select>
                      )}
                    </div>
                  </td>
                  <td>
                    <div>
                      <select className="form-select w-75 " name="exchange" style={{fontSize: 12}}   onChange={(e) => {
                        const updatedRowData = [...rowData];
                        updatedRowData[index].selectedExchange = e.target.value;
                        setRowData(updatedRowData);
                        getPrice(updatedRowData[index].selectedIsin, e.target.value, index);
                      }}>
                        <option value="" selected disabled>-Select-</option>
                        {data.exchange && data.exchange.length > 0 && (
                          <>
                            <option value="BSE">{data.exchange[0]}</option>
                            <option value="NSE">{data.exchange[1]}</option>
                          </>
                        )}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <select className="form-select w-75 " name="orderType" style={{fontSize: 12}} onChange={(e) => setOrderType(e.target.value)}>
                        <option value="" selected disabled>-Select-</option>
                        {data.orderType && data.orderType.length > 0 && (
                          <>
                            <option value="Buy">{data.orderType[0]}</option>
                            <option value="Sell">{data.orderType[1]}</option>
                          </>
                        )}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input type="text" className="form-control w-75" style={{fontSize: 12}} onChange={(e) => weightAge(e.target.value)} />
                    </div>
                  </td>
                  <td style={{fontSize: 12}}>{data.equityPrice}</td>
                  <td style={{fontSize: 12}}>{quantity}</td>
                  <td style={{fontSize: 12}}></td>
                  <td>
                    <div className="d-flex">
                      <button
                      className="btn btn-sm btn-outline-danger me-2"
                        onClick={handleDeleteRow(index)}
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