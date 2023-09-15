import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import CustomerForm from "./CustomerForm";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/customer`
    );
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}
