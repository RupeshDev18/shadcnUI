import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

import { archivedInvoicesType } from "@/data/archivedInvoicesData";
import { UnpaidInvoicesType } from "@/data/unPaidInvoiceData";

const statusClasses: { [key: string]: string } = {
  confirmed: "bg-orange-200 text-red-400",
  closed: "bg-green-200 text-green-500",
  delivered: "bg-blue-200 text-blue-500",
  paid: "bg-green-200 text-green-500",
  unpaid: "bg-red-200 text-red-500",
};
const columns = [
  "Invoice number",
  "Status",
  "Due date",
  "Total WT",
  "Total ATI",
];
interface PropsType {
  invoiceType: string;
  data: archivedInvoicesType[] | UnpaidInvoicesType[];
}

const InvoiceTable = ({ invoiceType, data }: PropsType) => {
  return (
    <>
      <div className="hidden sm:flex">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="rounded-xl bg-slate-800 hover:bg-slate-800">
              {columns.map((el) => {
                return <TableHead className=" text-white ">{el}</TableHead>;
              })}
              {invoiceType === "unpaid" && (
                <TableHead className="text-right"></TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((el) => (
              <TableRow>
                <TableCell className="font-medium">
                  {el.invoiceNumber}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`rounded-2xl ${statusClasses[el.status]} hover:${
                      statusClasses[el.status]
                    } px-4 py-2 capitalize`}
                  >
                    {el.status}
                  </Badge>
                </TableCell>
                <TableCell>{el.dueDate}</TableCell>
                <TableCell className="">{el.totalWT}</TableCell>
                <TableCell>{el.totalATI}</TableCell>
                {invoiceType === "unpaid" && (
                  <TableCell className="text-center">
                    <Button className="w-full rounded-3xl hover:bg-slate-900">
                      Pay --&gt;
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block sm:hidden">
        {data.map((el) => (
          <Card className="mb-3">
            <CardContent className="flex flex-col">
              <div className="flex justify-between mb-2 mt-2">
                <div>Invoice Number</div>
                <div className="text-slate-500">{el.invoiceNumber}</div>
              </div>
              <div className="flex justify-between mb-2">
                <div>Status </div>
                <div>
                  <Badge
                    className={`rounded-2xl ${statusClasses[el.status]} hover:${
                      statusClasses[el.status]
                    } px-4 py-2 capitalize`}
                  >
                    {el.status}
                  </Badge>{" "}
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div>Created on</div>
                <div className="text-slate-500">{el.dueDate} </div>
              </div>
              <div className="flex justify-between mb-2">
                <div>Total WT</div>
                <div className="text-slate-500">{el.totalWT}</div>
              </div>
              <div className="flex justify-between mb-2">
                <div>Total ATI</div>
                <div className="text-slate-500">{el.totalATI}</div>
              </div>
            </CardContent>
            <CardFooter className="">
              {invoiceType === "unpaid" && (
                <Button className="w-full rounded-3xl hover:bg-slate-900">
                  Pay --&gt;
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default InvoiceTable;
