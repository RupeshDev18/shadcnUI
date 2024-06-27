import React from "react";
import InvoiceTabs from "../tabs";
const InvoiceMain = () => {
  return (
    <>
      <div className="container ">
        <div className="my-4">Invoices</div>

        <InvoiceTabs />
      </div>
    </>
  );
};

export default InvoiceMain;
