import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import InformationsCard from "../information";
import InvoiceCard from "../invoiceCard";
import TotalCard from "../totalCard";
interface TypeProps {
  type: string;
  status: string;
}
const Product = ({ type, status }: TypeProps) => {
  return (
    <div className="container mt-6 px-[128px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-xs">
              Category
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/invoiceTable" className="text-xs">
              Breadcrumbs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xs">Product Name</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold mt-6 ">
          {type === "invoice" ? "Invoice" : "Order"} number 1
        </div>
        <div className="mt-4">
          <InformationsCard status={status} type={type} />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="lg:w-[75%] w-full">
            <InvoiceCard type={type} />
          </div>
          <div className="lg:w-[25%] w-full">
            <TotalCard type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
