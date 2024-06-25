"use client";
import { useGetAllStudentQuery } from "@/redux/features/student/createStudentApi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TStudent } from "@/types/student";
import GetFirstLatterOfName from "@/lib/GetFirstLatterStr";


const DashboardSideActionsBar = () => {
  const { data: students } = useGetAllStudentQuery("");
  

  return (
    <div className="w-[50%] space-y-6">
      <Card x-chunk="dashboard-01-chunk-5" className="h-full">
        <CardHeader>
          <CardTitle>Recent Added</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-">
          {students?.data?.slice(0, 7).map((student: TStudent) => (
            <div key={student._id} className="flex items-center gap-4 hover:bg-gray-200 p-4 rounded-md cursor-pointer">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>
                  <GetFirstLatterOfName name={student?.studentName.toUpperCase()} />
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {student?.studentName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {student?.fatherEmail || "student"}
                </p>
              </div>
              <div className="ml-auto font-medium"></div>
            </div>
          ))}
          
        </CardContent>
      </Card>
      {/* <div className="flex justify-between items-center border p-4 rounded-md">
            <div className="pie-chart mx-auto">
              <div className="slice slice-1"></div>
              <div className="slice slice-2"></div>
              <div className="slice slice-3"></div>
              <div className="slice slice-4"></div>
            </div>
          </div> */}
    </div>
  );
};

export default DashboardSideActionsBar;
