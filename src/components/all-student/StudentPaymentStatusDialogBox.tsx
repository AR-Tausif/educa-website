"use client";

import Link from "next/link";
import { AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog";
import { DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useGetDueStudentPaymentByClassAndStudentIdQuery } from "@/redux/features/student-payment/studentPaymentApi";

const StudentPaymentStatusDialogBox = ({studentId, classId, name, fatherName, motherName}:{studentId:string, classId:string, name:string, fatherName:string, motherName:string}) => {
    const { data:stdPayDueData, isLoading:stdPayDueIsLoading } = useGetDueStudentPaymentByClassAndStudentIdQuery({studentId, classId});
    console.log(stdPayDueData)
    return (
    <DialogContent className="sm:max-w-[825px]">
      <AlertDialogHeader>
        <DialogTitle className="text-center font-bold text-3xl">
          Student Payment Status
        </DialogTitle>
      </AlertDialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-2 items-center gap-4">
          <h1>Student Name : {name}</h1>
          <h1>Class Name : {classId}</h1>
          <h1>Father Name : {fatherName}</h1>
          <h1>Mother Name : {motherName}</h1>
        </div>
        <div className="grid-cols-2 items-center gap-4 mt-5">
          <h1 className="text-center font-bold  text-3xl">Due Academic Fees</h1>
          <h1>Total Due Fees {stdPayDueData?.data?.totalDue} TK</h1>
          <h1>Last Payment Date</h1>
        </div>
      </div>
      <AlertDialogFooter>
        <Link href={`/dashboard/payment/${studentId}`}>
          <Button type="submit">Payment Now</Button>
        </Link>
      </AlertDialogFooter>
    </DialogContent>
  );
};

export default StudentPaymentStatusDialogBox;
