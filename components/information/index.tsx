import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MdOutlineFileDownload } from "react-icons/md";
import { Button } from "../ui/button";

interface PropsType {
  status: string;
  type: string;
}

const statusClasses: { [key: string]: string } = {
  confirmed: "bg-orange-200 text-red-400",
  closed: "bg-green-200 text-green-500",
  delivered: "bg-blue-200 text-blue-500",
  paid: "bg-green-200 text-green-500",
  unpaid: "bg-red-200 text-red-500",
};

const InformationsCard: React.FC<PropsType> = ({ status, type }) => {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Informations</CardTitle>
        <hr />
      </CardHeader>
      <CardContent>
        <div className="gap-2">
          <span className="mr-2">Status:</span>
          <Badge
            className={`rounded-2xl ${statusClasses[status]} hover:${statusClasses[status]} px-4 py-2 capitalize`}
          >
            {status}
          </Badge>
        </div>
        {status === "unpaid" && <p>Due date: 28/11/2023</p>}
        {status === "paid" && <p>Paid on: 28/11/2023</p>}
        {type === "order" && (
          <>
            <p>Created on: 28/11/2023</p>{" "}
            <p>Shipping method: Fast shipping(2-3 Business Days)</p>{" "}
          </>
        )}
        {type === "order" && (
          <Button className="text-slate-800 bg-white border border-slate-800 rounded-2xl hover:bg-slate-800 hover:text-white mt-2 flex items-center gap-2 text-md">
            <MdOutlineFileDownload className="text-lg" /> Download Bill
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default InformationsCard;
