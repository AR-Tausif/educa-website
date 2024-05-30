"use client";
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
import { useGetStudentByStudentIdQuery } from "@/redux/features/student/createStudentApi";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleDown, FaEdit, FaPrint } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";

import SingleStudentReceipt from "../payment/SingleStudentReceipt";
import { ScrollArea } from "../ui/scroll-area";

import { useGetStudentPaymentHistoryByClassAndStudentIdQuery } from "@/redux/features/student-payment/studentPaymentApi";
import { TSinglePayInfo } from "@/types/payment.type";
import { usePDF } from "react-to-pdf";
import { TStudent } from "@/types/student";
import { APP_ROUTES } from "@/lib/utils";

const StudentDetails = ({ studentId }: { studentId: string }) => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const {
    data: studentDetail,
    error,
    isLoading,
  } = useGetStudentByStudentIdQuery(studentId);
  const {
    data: stdPayHistoryData,
    isLoading: stdPayHistoryLoading,
    isSuccess: stdPayHistoryIsSuccess,
  } = useGetStudentPaymentHistoryByClassAndStudentIdQuery({
    classId: studentDetail?.data?.class,
    studentId: studentId,
  });
  console.table(stdPayHistoryData?.data);
  if (isLoading) {
    return <h2 className="text-2xl text-center">Loading data...</h2>;
  }
  console.log("singleStudent ==>", studentDetail?.data);
  const {
    studentName,
    dateOfBirth,
    gender,
    class: studentClass,

    nationality,

    presentAddress,
    permanentAddress,

    fatherName,
    fatherEmail,
    fatherPhonNumber,
    fatherIDCardNumber,
    fatherProfession,
    fatherPesignation,
    motherName,
    motherEmail,
    motherPhonNumber,
    motherIDCardNumber,
    motherProfession,
    motherPesignation,
  } = studentDetail?.data as TStudent;

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="p-5">
      <div className="flex justify-end ">
        <Link
          href={`/${APP_ROUTES.UPDATE_STUDENT}/${studentDetail?.data?._id}`}
        >
          <Button>Update</Button>
        </Link>
      </div>

      <div>
        <SectionTitle title="Student Info" />
        <div className="grid grid-cols-3 mt-10">
          <h1>Student Name : {studentName} </h1>
          <h1>
            Class :{" "}
            <span className="font-bold">
              {studentClass?.name.toUpperCase() || "..."}{" "}
            </span>{" "}
          </h1>
          <h1>Student Gender : {gender || "***"}</h1>
          <h1>Date of Birth : {dateOfBirth} </h1>
          <h1>Nationality : {nationality || "Bangladeshi"}</h1>
          <h1>Present Address : {presentAddress || "..."} </h1>
          <h1>Permanent address : {permanentAddress} </h1>
        </div>

        <SectionTitle title="Father's Info" />
        <div className="grid grid-cols-3 mt-10">
          <p>Father Name : {fatherName} </p>
          <p>Email : {fatherEmail || "..."} </p>
          <p>Phone Number : {fatherPhonNumber || "..."} </p>
          <p>NID : {fatherIDCardNumber || "..."} </p>
          <p>Profession : {fatherProfession || "..."} </p>
          <p>Pesignation : {fatherPesignation || "..."} </p>
        </div>

        <SectionTitle title="Mother's Info" />
        <div className="grid grid-cols-3 mt-10">
          <p>Mother Name : {motherName} </p>
          <p>Email : {motherEmail || "..."} </p>
          <p>Phone Number : {motherPhonNumber || "..."} </p>
          <p>NID : {motherIDCardNumber || "..."} </p>
          <p>Profession : {motherProfession || "..."} </p>
          <p>Pesignation : {motherPesignation || "..."} </p>
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle title="Pay Section" />
        <div>
          <h1 className="text-center text-black font-bold text-2xl underline">
            All Payment History
          </h1>

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
              {stdPayHistoryData?.data?.map(
                (invoice: TSinglePayInfo, index: number) => (
                  <TableRow key={invoice._id}>
                    <TableCell className=" border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                      <Checkbox id="terms" className="mr-3" />
                      {index + 1}
                    </TableCell>

                    <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
                      {studentName}
                    </TableCell>
                    <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
                      {studentClass?.name}
                    </TableCell>

                    <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4 text-purple-700">
                      {invoice.date}
                    </TableCell>

                    <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4  text-black">
                      <Sheet>
                        <SheetTrigger asChild>
                          <IoEye className="text-2xl" />
                        </SheetTrigger>
                        <SheetContent>
                          <ScrollArea className="h-[90vh] w-auto">
                            <SingleStudentReceipt
                              targetRef={targetRef}
                              studentDetail={studentDetail?.data}
                              singlePayInfo={invoice}
                            />
                            <SheetFooter>
                              <SheetClose asChild>
                                <Button
                                  onClick={() => toPDF()}
                                  className="mr-16"
                                >
                                  Download PDF
                                </Button>
                              </SheetClose>
                            </SheetFooter>
                          </ScrollArea>
                        </SheetContent>
                      </Sheet>
                    </TableCell>

                    <TableCell className="font-medium   border-blue-600 border-t-4 border-b-4  text-blue-500">
                      <FaPrint className="text-2xl" />
                      2w
                    </TableCell>

                    <TableCell className="font-medium  border-blue-600 border-b-4 border-t-4 border-r-4 text-xl text-green-500">
                      <FaArrowAltCircleDown className="text-2xl text-center ms-5 " />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
