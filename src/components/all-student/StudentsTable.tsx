"use client";

import { Checkbox } from "../ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { MdAutoDelete } from "react-icons/md";
import {
  useDeleteStudentByIdMutation,
  useGetAllStudentQuery,
} from "@/redux/features/student/createStudentApi";
import { IoEye } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useGetDueStudentPaymentByClassAndStudentIdQuery } from "@/redux/features/student-payment/studentPaymentApi";
import StudentPaymentStatusDialogBox from "./StudentPaymentStatusDialogBox";
import TableBodyRow from "./TableBodyRow";
import { TStudent } from "@/types/student";

const StudentsTable = () => {
  const { data, isLoading } = useGetAllStudentQuery("");
 

  const router = useRouter();
  console.log(data);
  

  if (isLoading) {
    return (
      <div className="flex gap-2 items-center h-[50%] justify-center">
        <p className="text-3xl mr-4">Loading</p>
        <svg
          className="animate-spin h-8 w-8 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <>
      <Table className="w-full text-sm text-left rtl:text-right border rounded-lg text-gray-500 dark:text-gray-400">
        <TableCaption>A list of your students</TableCaption>
        <TableHeader className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TableRow className="font-bold">
            <TableHead scope="col" className="px-6 py-3">
              student name
            </TableHead>
            <TableHead scope="col" className="px-6 py-3">
              Class
            </TableHead>
            <TableHead scope="col" className="px-6 py-3">
              Status
            </TableHead>
            <TableHead scope="col" className="px-6 py-3">
              Gender
            </TableHead>
            <TableHead scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.data.map((student: TStudent, index: number) => (
            <TableBodyRow   key={index} student={student} />
          ))}
          {/* {data?.data.map((invoice: any, index: number) => (
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
                <Link href={`all-students/${invoice._id}`}>
                  <Button>Details</Button>
                </Link>
              </TableCell>
              <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4 text-green-500">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Pay Now</Button>
                  </DialogTrigger>
                  <StudentPaymentStatusDialogBox
                    classId={invoice?.class?.name}
                    studentId={invoice._id}
                    name={invoice.studentName}
                    fatherName={invoice.fatherName}
                    motherName={invoice.motherName}
                  />
                </Dialog>
              </TableCell>

              <TableCell className="font-medium  border-blue-600 border-b-4 border-t-4 border-r-4 text-xl text-red-500 text-center">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <MdAutoDelete className="text-2xl text-center ms-5 hover:cursor-pointer" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(invoice._id)}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))} */}


        </TableBody>
      </Table>
    </>
  );
};

export default StudentsTable;
