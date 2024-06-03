import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
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
import { useDeleteStudentByIdMutation } from "@/redux/features/student/createStudentApi";
import { toast } from "sonner";
import { TResponse } from "@/types/global";

const StudentDeleteBtn = ({ studentId }: { studentId: string }) => {
  const [deleteStudentById] = useDeleteStudentByIdMutation();
  const handleDelete = async (_id: string) => {
    console.log("delete");
    console.log(_id);
    try {
      const toastId = toast.loading("Student deleting..");

      const res = await deleteStudentById(_id) as TResponse;
      console.log("delete student ==>", res);
      if (res.data) {
        toast.success("Student deleted successfully", { id: toastId });
      }
    } catch (err: any) {
      console.log(err);
      toast.success(err.message || "Something went wrong");
    }
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="text-red-300 rounded-full p-2 hover:text-red-600"
              >
                {/* <p className=" text-red-300 p-2 hover:bg-muted rounded-full"> */}
                <Trash2 size={23} />
                {/* </p> */}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your student and remove student data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDelete(studentId)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-red-500">Delete</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default StudentDeleteBtn;
