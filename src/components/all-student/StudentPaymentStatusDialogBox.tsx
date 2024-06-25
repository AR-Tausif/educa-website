"use client";

import Link from "next/link";
import { AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog";
import { DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useGetDueStudentPaymentByClassAndStudentIdQuery } from "@/redux/features/student-payment/studentPaymentApi";
import { TClass } from "@/types/student";
import { APP_ROUTES } from "@/lib/utils";

type TProps = {
  studentId: string;
  studentClass: TClass;
  name: string;
  fatherName: string;
  motherName: string;
};
const StudentPaymentStatusDialogBox = ({
  studentId,
  studentClass,
  name,
  fatherName,
  motherName,
}: TProps) => {
  const { data: stdPayDueData, isLoading: stdPayDueIsLoading } =
    useGetDueStudentPaymentByClassAndStudentIdQuery({
      studentId,
      classId: studentClass?._id,
    });

  return (
    <DialogContent className="sm:max-w-[825px]">
      <AlertDialogHeader>
        <DialogTitle className="text-center font-bold text-3xl">
          Student Payment Status
        </DialogTitle>
      </AlertDialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-2 items-center gap-4">
          <h5>Student Name : {name}</h5>
          <h5>Class Name : {studentClass?.name}</h5>
          <h5>Father Name : {fatherName}</h5>
          <h5>Mother Name : {motherName}</h5>
        </div>
        <div className="grid-cols-2 items-center gap-4 mt-5">
          <h5 className="text-center font-bold  text-3xl">Due Academic Fees</h5>
          <h5>Total Due Fees {stdPayDueData?.data?.totalDue} TK</h5>
          <h5>Last Payment Date</h5>
        </div>
      </div>
      <AlertDialogFooter>
        <Link href={`/${APP_ROUTES.PAYMENT}/${studentId}`}>
          <Button type="submit">Payment Now</Button>
        </Link>
      </AlertDialogFooter>
    </DialogContent>
  );
};

export default StudentPaymentStatusDialogBox;
