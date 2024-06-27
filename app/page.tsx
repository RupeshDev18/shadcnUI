import InvoiceMain from "@/components/invoice";
import Product from "@/components/product";
export default function Home() {
  return (
    <>
      <Product type="invoice" status="unpaid" />
    </>
  );
}
