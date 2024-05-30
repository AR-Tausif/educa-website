import { BadgeDollarSign, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Dialog, DialogTrigger } from "../ui/dialog";
import StudentPaymentStatusDialogBox from "../all-student/StudentPaymentStatusDialogBox";
import { TStudent } from "@/types/student";

const StudentPaymentBtn = ({ student }: { student: TStudent }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Dialog>
            <DialogTrigger asChild>
            <Button
            variant="outline"
            className="text-green-300 rounded-full p-2 hover:text-green-600"
          >
            <BadgeDollarSign size={23} />
          </Button>
            </DialogTrigger>
            <StudentPaymentStatusDialogBox
              studentClass={student?.class}
              studentId={student._id}
              name={student.studentName}
              fatherName={student.fatherName}
              motherName={student.motherName}
            />
          </Dialog>
          
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-green-500">Payment</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default StudentPaymentBtn;
