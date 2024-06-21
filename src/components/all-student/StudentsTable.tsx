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
import {
  useGetAllStudentQuery,
} from "@/redux/features/student/createStudentApi";

import { useRouter } from "next/navigation";

import TableBodyRow from "./TableBodyRow";
import { TStudent } from "@/types/student";
import { Loader } from "lucide-react";

const StudentsTable = () => {
  const { data, isLoading } = useGetAllStudentQuery("");
  

  if (isLoading) {
    return (
      <div className="flex gap-2 items-center h-[50%] justify-center">
        <p className="text-xl text-blue-500 mr-4">Please Wait...</p>
        <Loader className="animate-spin" />
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
        </TableBody>
      </Table>
    </>
  );
};

export default StudentsTable;
