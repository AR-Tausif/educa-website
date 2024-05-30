import { TStudent } from "@/types/student";
import { TableCell, TableRow } from "../ui/table";
import { BadgeDollarSign, SquareGanttChart, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import StudentDeleteBtn from "../common/StudentDeleteBtn";
import StudentPaymentBtn from "../common/StudentPaymentBtn";
import StudentViewBtn from "../common/StudentViewBtn";

const TableBodyRow = ({ student }: { student: TStudent }) => {
  return (
    <TableRow className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <TableCell
        scope="row"
        className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {student?.studentName}
      </TableCell>
      <TableCell className="px-6">{student?.class?.name}</TableCell>
      <TableCell className="px-6">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
          <svg
            className="w-2.5 h-2.5 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
          </svg>
          2 minutes ago
        </span>
      </TableCell>
      <TableCell className="px-6">{student?.gender}</TableCell>
      <TableCell className="px-6 text-right">
        <div className="flex flex-row-reverse gap-2 ">
          <StudentDeleteBtn studentId={student._id} />
          <StudentPaymentBtn student={student} />
          <StudentViewBtn studentId={student._id} />

          
          
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableBodyRow;
