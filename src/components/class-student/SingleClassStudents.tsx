"use client";

import { useGetStudentByClassIdQuery } from "@/redux/features/student/createStudentApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import TableBodyRow from "../all-student/TableBodyRow";
import { TStudent } from "@/types/student";

const SingleClassStudents = ({ classId }: { classId: string }) => {
  const { data, error, isLoading } = useGetStudentByClassIdQuery(classId);

  return (
    <div className="h-screen">
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
          {data?.data?.map((student: TStudent, index: number) => (
            <TableBodyRow   key={index} student={student} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SingleClassStudents;
