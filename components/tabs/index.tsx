import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvoiceTable from "../table";
import { UnpaidInvoices } from "@/data/unPaidInvoiceData";
import { ArchiveInvoices } from "@/data/archivedInvoicesData";
const InvoiceTabs = () => {
  return (
    <Tabs defaultValue="unpaid" className="mx-auto">
      <TabsList className="w-full bg-inherit border-b-2 rounded-none border-b-slate-300 justify-start shadow-none p-0 gap-3">
        <TabsTrigger
          value="unpaid"
          className="text-slate-600 h-full rounded-b-none data-[state=active]:bg-black data-[state=active]:text-white capitalize w-1/2 sm:w-[200px]"
        >
          unpaid invoices
        </TabsTrigger>
        <TabsTrigger
          value="archived"
          className="text-slate-600 h-full rounded-b-none data-[state=active]:bg-black data-[state=active]:text-white w-1/2 sm:w-[200px]"
        >
          Archived invoices
        </TabsTrigger>
      </TabsList>
      <TabsContent value="unpaid">
        <InvoiceTable invoiceType="unpaid" data={UnpaidInvoices} />
      </TabsContent>
      <TabsContent value="archived">
        <InvoiceTable invoiceType="archived" data={ArchiveInvoices} />
      </TabsContent>
    </Tabs>
  );
};

export default InvoiceTabs;
