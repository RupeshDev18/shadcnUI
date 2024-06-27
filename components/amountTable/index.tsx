import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AmountTable = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60%] text-violet-700">
              Description
            </TableHead>
            <TableHead className="text-violet-700">RATE</TableHead>
            <TableHead className="text-violet-700">QTY</TableHead>
            <TableHead className="text-right text-violet-700">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <p>Services</p>
              <p>Cost of Various Services</p>
            </TableCell>
            <TableCell>
              <p>$55.00</p>
              <p>+Tax</p>
            </TableCell>
            <TableCell>10</TableCell>
            <TableCell className="text-right">$550.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <p>Consulting</p>
              <p>Consulting for your buisness.</p>
            </TableCell>
            <TableCell>
              <p>$75.00</p>
              <p>+Tax</p>
            </TableCell>
            <TableCell>15</TableCell>
            <TableCell className="text-right">$1125.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex w-full justify-between gap-4 mt-5">
        <div className="w-[45%]"></div>
        <div className="w-[55%]">
          <div className="flex text-sm">
            <div className="text-right flex flex-col gap-2 flex-1 p-2">
              <p>Subtotal</p>
              <p>Discount</p>
              <p>Tax</p>
            </div>
            <div className="text-right  flex flex-col gap-2 flex-1 p-2">
              <p>$1798.39.00</p>
              <p>-$179.84</p>
              <p>+$80.93</p>
            </div>
          </div>
          <hr className="border-[0.5px] border-slate-800" />
          <div className="flex text-sm">
            <div className="text-right flex flex-col gap-2 flex-1 p-2">
              <p>Total</p>
              <p>Deposit Requested</p>
            </div>
            <div className="text-right  flex flex-col gap-2 flex-1 p-2">
              <p>$1699.48</p>
              <p>-$169.95</p>
            </div>
          </div>
          <hr className="border-2 border-violet-700" />
          <div className="flex text-sm font-semibold">
            <div className="text-right flex flex-col gap-2 flex-1 p-2">
              <p>Deposit Due</p>
            </div>
            <div className="text-right  flex flex-col gap-2 flex-1 p-2">
              <p>-$169.95</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmountTable;
