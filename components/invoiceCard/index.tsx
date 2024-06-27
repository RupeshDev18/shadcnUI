import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import AmountTable from "./../amountTable";
import { MdOutlineFileDownload } from "react-icons/md";
interface PropsType {
  type: string;
}
const InvoiceCard = ({ type }: PropsType) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="mb-1 font-medium text-lg">Invoice</CardTitle>
          <hr className="" />
          <div className="flex justify-end w-full">
            <Button className="text-slate-800 bg-white border border-slate-800 rounded-2xl hover:bg-slate-800 hover:text-white mt-2 flex items-center gap-2 text-md">
              {" "}
              <MdOutlineFileDownload className="text-lg" /> Download invoice
            </Button>{" "}
          </div>
        </CardHeader>
        <CardContent>
          <div className="container border border-slate-300 p-10 px-12">
            <div className="flex justify-between mt-10 mb-5">
              <div className="text-5xl font-semibold">INVOICE</div>
              <div className="text-sm">
                <p>YOUR COMPANY</p>
                <p>1234 Your Street</p>
                <p>City, California</p>
                <p>90210</p>
                <p>United States</p>
                <p>1-888-123-4567</p>
              </div>
            </div>
            <div className="flex justify-between mb-10">
              <div className="text-sm flex-1">
                <p className="text-violet-700">Billed To</p>
                <p>YOUR COMPANY</p>
                <p>1234 Your Street</p>
                <p>City, California</p>
                <p>90210</p>
                <p>United States</p>
                <p>1-888-123-4567</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-between flex-1">
                <div>
                  <div className="text-violet-700">Date Issued</div>
                  <div>26/3/2021</div>
                </div>
                <div>
                  <div className="text-violet-700">Invoice Number</div>
                  <div>INV-10012</div>
                </div>
                <div>
                  <div className="text-violet-700">Amount Due</div>
                  <div>$1,699.48</div>
                </div>
                <div>
                  <div className="text-violet-700">Due Date</div>
                  <div>25/4/2021</div>
                </div>
              </div>
            </div>
            <hr className="border-2 border-violet-700 mb-2" />
            <div>
              {" "}
              <AmountTable />{" "}
            </div>
            <div className="text-sm">
              <div>
                <p className="text-violet-700">Notes </p>
                <p>Thank you for your buisness!</p>
              </div>
              <div>
                <p className="text-violet-700">Terms</p>
                <p>
                  Please pay within 30 days using the link in you invoice mail
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default InvoiceCard;
