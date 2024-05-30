import { SquareGanttChart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/utils";

const StudentViewBtn = ({ studentId }: { studentId: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Link href={`/${APP_ROUTES.ALL_STUDENT}/${studentId}`}>
          <Button
            variant="outline"
            className="text-gray-500 rounded-full p-2 hover:text-gray-600"
          >
            <SquareGanttChart size={23} />
          </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-gray-700">View</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default StudentViewBtn;
