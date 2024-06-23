import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleDown, FaEdit, FaPrint } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdAutoDelete } from "react-icons/md";

const StudentDetailsPage = () => {
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

  return (
    <div className="p-5">
      <div className="flex justify-end ">
        <Button>Update</Button>
      </div>

      <div>
        <SectionTitle title="Student Info" />
        <div className="grid grid-cols-3 mt-10">
          <h5>Student Name</h5>
          <h5>Class</h5>
          <h5>Student Gender</h5>
          <h5>Date of Birth</h5>
          <h5>Date of Birth</h5>
          <h5>Date of Birth</h5>
          <h5>Nationality</h5>
          <h5>Nationality</h5>
          <h5>Present Address</h5>
          <h5>Permanent address</h5>
        </div>

        <SectionTitle title="Father's Info" />
        <div className="grid grid-cols-3 mt-10">
          <h5>Father Name</h5>
          <h5>Email</h5>
          <h5>Phone Number</h5>
          <h5>NID</h5>
          <h5>Profession</h5>
          <h5>Pesignation</h5>
        </div>

        <SectionTitle title="Mother's Info" />
        <div className="grid grid-cols-3 mt-10">
          <h5>Mother Name</h5>
          <h5>Email</h5>
          <h5>Phone Number</h5>
          <h5>NID</h5>
          <h5>Profession</h5>
          <h5>Pesignation</h5>
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle title="Pay Section" />
        <div>
          <h5 className="text-center text-black font-bold text-2xl underline">
            All Payment History
          </h5>

          <Table>
            <TableCaption>A list of your recent Payment History.</TableCaption>
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
      </div>
    </div>
  );
};

export default StudentDetailsPage;
