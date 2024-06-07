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
import FormHeadingContent from "@/components/FormHeadingContent";
import AllPaymentHistoryTableRow from "@/components/payment/AllPaymentHistoryTableRow";

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
      <FormHeadingContent title="All payment history" desc="Here listed all payment histories from our server." className="text-center pb-5" />

      <Table>
        <TableCaption>A list of your recent Students.</TableCaption>
        <TableHeader className="bg-muted">
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
          <AllPaymentHistoryTableRow/>
        </TableBody>
      </Table>
    </div>
  );
};

export default AllPaymentHistoryPage;
