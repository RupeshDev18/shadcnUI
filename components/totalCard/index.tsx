import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
interface PropsType {
  type: string;
}
const TotalCard = ({ type }: PropsType) => {
  return (
    <>
      {type === "invoice" ? (
        <Card className="border-2 border-slate-400">
          <CardHeader>
            <CardTitle className="text-3xl font-normal">Total</CardTitle>
            <hr />
          </CardHeader>
          <CardContent>
            <div className="grid gap-1">
              <div className="grid grid-cols-2">
                <div className="text-left"> Total WT:</div>
                <div className="text-right">325.00€</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-left"> Taxes:</div>
                <div className="text-right"> 5.00€</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-left"> Total ATI:</div>
                <div className="text-right">350.00€</div>
              </div>
              <div className="grid grid-cols-[2fr_1fr]">
                <div className="text-left">Paid on 05/04/24:</div>
                <div className="text-right"> 15.00€</div>
              </div>
              <div className="grid grid-cols-[2fr_1fr]">
                <div className="text-left"> Paid on 06/04/24:</div>
                <div className="text-right"> 20.00€</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2">
            <p className="text-2xl font-normal tracking-tight mb-4">
              Remaining to Pay:
            </p>
            <p className="text-right text-3xl font-medium w-full tracking-normal mb-2">
              315.00€
            </p>
            <Button className="w-full rounded-3xl h-12 py-4 hover:bg-slate-900">
              Pay --&gt;
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <>
          <Card className="">
            <CardHeader>
              <CardTitle className="text-3xl font-normal">
                Total price
              </CardTitle>
              <hr />
            </CardHeader>
            <CardContent>
              <div className="grid gap-1 text-md">
                <div className="grid grid-cols-2">
                  <div className="text-left"> Total WT:</div>
                  <div className="text-right">325.00€</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-left"> Total ATI:</div>
                  <div className="text-right">350.00€</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-left"> Discount:</div>
                  <div className="text-right"> 5%</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              <p className="text-lg tracking-tighter font-normal mb-4">
                Total price:
              </p>
              <p className="text-right text-2xl font-medium tracking-normal mb-2">
                1830.00€
              </p>
            </CardFooter>
          </Card>
        </>
      )}
    </>
  );
};

export default TotalCard;
