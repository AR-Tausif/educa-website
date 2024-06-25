"use client";

import { useGetAllPaymentHistoryQuery } from "@/redux/features/payment-history/paymentHistoryApi";
import { TableCell, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { IoEye } from "react-icons/io5";
import { FaArrowAltCircleDown, FaPrint } from "react-icons/fa";
import { TPaymentHistory } from "@/types/payment.type";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { usePDF } from "react-to-pdf";
import AllPayHistorySingleReceipt from "./AllPayHistorySingleReceipt";
import { Loader } from "lucide-react";

const AllPaymentHistoryTableRow = () => {
  const { data, isLoading, isFetching } =
    useGetAllPaymentHistoryQuery(undefined);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="pr-2">Please wait </span>{" "}
        <Loader className="animate-spin" />
      </div>
    );
  }
  return (
    <>
      {data?.data?.map((payItem: TPaymentHistory, index: number) => (
        <TableRow key={payItem?._id}>
          <TableCell className=" text-xl">
            <Checkbox id="terms" className="mr-3" />
            {index + 1}
          </TableCell>

          <TableCell className="font-medium ">
            {payItem?.student?.studentName}
          </TableCell>
          <TableCell className="font-medium ">{payItem?.class?.name}</TableCell>

          <TableCell className="font-medium  text-purple-700">
            {new Date(payItem?.date).toDateString()}
          </TableCell>

          <TableCell className="font-medium  text-black">
            <Sheet>
              <SheetTrigger asChild>
                <IoEye className="text-2xl" />
              </SheetTrigger>
              <SheetContent>
                <ScrollArea className="h-[90vh] w-auto">
                  <AllPayHistorySingleReceipt
                    targetRef={targetRef}
                    studentName={payItem?.student?.studentName}
                    singlePayInfo={payItem}
                  />
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button onClick={() => toPDF()} className="mr-16">
                        Download PDF
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </TableCell>

          {/* <TableCell className="font-medium    text-blue-500">
                <FaPrint className="text-2xl" />
              </TableCell>

              <TableCell className="font-medium  text-xl text-red-500">
                <FaArrowAltCircleDown className="text-2xl text-center ms-5 " />
              </TableCell> */}
        </TableRow>
      ))}
    </>
  );
};

export default AllPaymentHistoryTableRow;
