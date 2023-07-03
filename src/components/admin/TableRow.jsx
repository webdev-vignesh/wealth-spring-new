'use client';

import { setSelectedBasket } from "@/store/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import basketData from "@/app/admin/basket/basket.json"
import Link from "next/link";
import { useEffect, useState } from "react";
import { getEquityPrice, getInstrumentDetails, sendWeightage } from "@/app/api/basket/route";

const TableRow = ({ index }) => {
    const [constituent, setConstituent] = useState("");
    const [exchange, setExchange] = useState("");
    const [orderType, setOrderType] = useState("");
    const [weight, setWeight] = useState(null);
    const [equityPrice, setEquityPrice] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [rowData, setRowData] = useState([]);
    const [rows, setRows] = useState(1);
    const basketTemplate = [
      {
        constituents: [],
        exchange: ["BSE", "NSE"],
        orderType: ["Buy", "Sell"],
      },
    ];
  
    useEffect(() => {
      // Fetch the instrument details and set the initial values for each row
      async function fetchInstrumentDetails() {
        let details = await getInstrumentDetails();
        setRowData(details); // Set the first instrument as the default value
      }
      fetchInstrumentDetails();
    }, []);
  
    // Update the equity price when the constituent and exchange values change
    useEffect(() => {
      async function fetchEquityPrice() {
        if (constituent && exchange) {
          const result = await getEquityPrice(constituent, exchange);
          setEquityPrice(result);
        }
      }
      fetchEquityPrice();
    }, [constituent, exchange]);
  
    // Calculate the quantity when the weight changes
    useEffect(() => {
      if (weight && totalAmount && equityPrice) {
        const qty = sendWeightage({ weight, totalAmount, equityPrice });
        setQuantity(qty);
      }
    }, [weight, totalAmount, equityPrice]);

    const handleDelete = (index) => {
        // Create a copy of the row data
        const updatedRowData = [...rowData];
      
        // Remove the row at the specified index
        updatedRowData.splice(index, 1);
      
        // Update the row data state with the updated copy
        setRowData(updatedRowData);
      
        // Decrease the number of rows
        setRows((prevRows) => prevRows - 1);
      };  
         
    console.log(rowData)
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>
          <div>
            <select
              className="form-select w-75 fs-6"
              name="constituents"
              value={constituent}
              onChange={(e) => setConstituent(e.target.value)}
            >
              <option value="" disabled>Select a Constituent</option>
              {rowData.map((data, index) => (
                <option value={data.isinNo} key={index}>
                  {data.instrumentName}
                </option>
              ))}
            </select>
          </div>
        </td>
        <td>
          <div>
            <select
              className="form-select w-75 fs-6"
              name="exchange"
              value={exchange}
              onChange={(e) => {
                setExchange(e.target.value);
              }}
            >
              <option value="" disabled>Select an Exchange</option>
              <option value="BSE">{basketTemplate[0].exchange[0]}</option>
              <option value="NSE">{basketTemplate[0].exchange[1]}</option>
            </select>
          </div>
        </td>
        <td>
          <div>
            <select
              className="form-select w-75 fs-6"
              name="orderType"
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
            >
              <option value="" disabled>Select Order Type</option>
              <option value="Buy">{basketTemplate[0].orderType[0]}</option>
              <option value="Sell">{basketTemplate[0].orderType[1]}</option>
            </select>
          </div>
        </td>
        <td>
          <div>
            <input
              type="text"
              className="form-control w-75"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </td>
        <td>{equityPrice}</td>
        <td>{quantity}</td>
        <td></td>
        <td>
          <div className="d-flex">
            <button
              className="btn btn-sm btn-outline-danger me-2"
              onClick={(e) => {
                handleDelete(e.target.index)
              }}
            >
              <i className="bi bi-dash-lg"></i>
            </button>
            <button
              className="btn btn-sm btn-outline-success"
              onClick={handleDelete}
            >
              <i className="bi bi-check2"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  };

  export default TableRow;