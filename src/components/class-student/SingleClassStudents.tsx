"use client";

import { useGetStudentByClassIdQuery } from "@/redux/features/student/createStudentApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { FaDonate, FaEdit } from "react-icons/fa";
import {
  MdAutoDelete,
  MdBlock,
  MdOutlinePayment,
  MdPayments,
} from "react-icons/md";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import { APP_ROUTES } from "@/lib/utils";

const SingleClassStudents = ({ classId }: { classId: string }) => {
  const { data, error, isLoading } = useGetStudentByClassIdQuery(classId);
  console.log("data ==>", data?.data);

  return (
    <div className="h-screen">
      <h1 className="text-center text-black font-bold text-2xl underline">
        All User Information
      </h1>

      <Table>
        <TableCaption>A list of your recent User.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.L</TableHead>

            <TableHead>Student Name</TableHead>
            <TableHead>{"Father's Name"}</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.data.map((invoice: any, index: number) => (
            <TableRow key={invoice._id} className="text-start">
              <TableCell className=" border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                <Checkbox id="terms" className="mr-3" />
                {index + 1}
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
                {invoice.studentName}
              </TableCell>
              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
                {invoice.fatherName}
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
                {invoice.gender}
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4 text-green-500">
                <Link href={`/${APP_ROUTES.STUDENT_DETAILS}`}>
                  <Button>Details</Button>
                </Link>
              </TableCell>
              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4 text-green-500">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Pay Now</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[825px]">
                    <AlertDialogHeader>
                      <DialogTitle className="text-center font-bold text-3xl">
                        Student Payment Status
                      </DialogTitle>
                    </AlertDialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 items-center gap-4">
                        <h1>Student Name</h1>
                        <h1>Class Name</h1>
                        <h1>Father Name</h1>
                        <h1>Mother Name</h1>
                      </div>
                      <div className="grid-cols-2 items-center gap-4 mt-5">
                        <h1 className="text-center font-bold  text-3xl">
                          Due Academic Fees
                        </h1>
                        <h1>Total Due Fees 5000 TK</h1>
                        <h1>Last Payment Date</h1>
                      </div>
                    </div>
                    <AlertDialogFooter>
                      <Link href={`/${APP_ROUTES.PAYMENT}`}>
                        <Button type="submit">Payment Now</Button>
                      </Link>
                    </AlertDialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-b-4 border-t-4 border-r-4 text-xl text-red-500 text-center">
                <MdAutoDelete className="text-2xl text-center ms-5" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SingleClassStudents;
