import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEdit, FaArrowAltCircleDown } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { FaPrint } from "react-icons/fa";

import { Checkbox } from "@/components/ui/checkbox";

const invoices = [
  {
    StudentName: "samim",
    ClassName: "KG-2",
    Date: "05-01-2015",
  },
  {
    StudentName: "hossain",
    ClassName: "Pre-Play",
    Date: "05-01-2015",
  },
  {
    StudentName: "sujon",
    ClassName: "KG-2",
    Date: "05-01-2015",
  },
  {
    StudentName: "shakil",
    ClassName: "KG-2",
    Date: "05-01-2015",
  },
  {
    StudentName: "santo",
    ClassName: "KG-2",
    Date: "05-01-2015",
  },
  {
    StudentName: "habib",
    ClassName: "Pre-Play",
    Date: "05-01-2015",
  },
  {
    StudentName: "jalal",
    ClassName: "KG-2",
    Date: "05-01-2015",
  },
];

const AllPaymentHistoryPage = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center text-black font-bold text-2xl">
        All Students
      </h1>

      <Table>
        <TableCaption>A list of your recent Students.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.L</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Print </TableHead>
            <TableHead>Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.StudentName}>
              <TableCell className=" border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                <Checkbox id="terms" className="mr-3" />
                {index + 1}
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
                {invoice.StudentName}
              </TableCell>
              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
                {invoice.ClassName}
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4 text-purple-700">
                {invoice.Date}
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4  text-black">
                <IoEye className="text-2xl" />
              </TableCell>

              <TableCell className="font-medium   border-blue-600 border-t-4 border-b-4  text-blue-500">
                <FaPrint className="text-2xl" />
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-b-4 border-t-4 border-r-4 text-xl text-red-500">
                <FaArrowAltCircleDown className="text-2xl text-center ms-5 " />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllPaymentHistoryPage;
