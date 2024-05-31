"use client"
import { Separator } from "../ui/separator";
import { useGetStudentByStudentIdQuery } from "@/redux/features/student/createStudentApi";
import { TStudent } from "@/types/student";
import AboutMe from "./AboutMe";
import { SkeletonCard } from "./SkeletonCard";

const StudentDetailsTable = ({studentId}:{studentId:string}) => {
    const {
        data: studentDetail,
        error,
        isLoading,
      } = useGetStudentByStudentIdQuery(studentId);
      const datas:TStudent=studentDetail?.data;
      console.log(error)
      console.log(studentDetail)

      if(isLoading) <SkeletonCard/>
  return (
    <div className="space-y-5">
        {/* About me */}
        
        <div className="border rounded-lg">
          <div className="flex justify-between p-4">
            <p>About me</p>
            <p className="text-blue-400 font-bold">Edit</p>
          </div>
          <Separator />
          <AboutMe studentData={studentDetail?.data} />

        </div>
        {/* Education */}
        
      </div>
  );
};

export default StudentDetailsTable;
