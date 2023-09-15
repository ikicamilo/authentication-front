import React from "react";

export default function CustomerList({ customers }) {
  function renderCustomers() {
    return (
      customers &&
      customers.map((customer, i) => {
        return <li key={i}> {customer.name} </li>;
      })
    );
  }
  return (
    <div>
      <ul>
        <li>{renderCustomers()}</li>
      </ul>
    </div>
  );
}
