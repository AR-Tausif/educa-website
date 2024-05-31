"use client"
import { Separator } from "../ui/separator";
import { useGetStudentByStudentIdQuery } from "@/redux/features/student/createStudentApi";
import { TStudent } from "@/types/student";

const StudentDetailsTable = ({studentId}:{studentId:string}) => {
    const {
        data: studentDetail,
        error,
        isLoading,
      } = useGetStudentByStudentIdQuery(studentId);
      const datas:TStudent=studentDetail?.data;
  return (
    <div className="border rounded-lg">
      <div className="flex justify-between p-4">
        <p>About me</p>
        <p className="text-blue-400 font-bold">Edit</p>
      </div>
      <Separator />
      <div className="p-6 flex justify-between">
        {/* city */}
        <div className="flex flex-col gap-16">
          <div className="text-sm font-semibold">
            <p className="text-gray-500">Name</p>
            <p className="text-gray-800">{datas?.studentName}</p>
          </div>
        </div>
        {/* dob */}
        <div className="flex flex-col gap-16">
          <div className="text-sm font-semibold">
            <p className="text-gray-500">Date of birth</p>
            <p className="text-gray-800">{datas?.dateOfBirth}</p>
          </div>
          <div className="text-sm font-semibold">
            <p className="text-gray-500">Citizenship</p>
            <p className="text-gray-800">{datas?.nationality}</p>
          </div>
        </div>
        {/* desirable position */}

        <div className="flex flex-col gap-16">
          <div className="text-sm font-semibold">
            <p className="text-gray-500">Gender</p>
            <p className="text-gray-800">{datas?.gender}</p>
          </div>
          <div className="text-sm font-semibold">
            <p className="text-gray-500">First Language</p>
            <p className="text-gray-800">{datas?.firstLanguage ? datas?.firstLanguage : "N/A"}</p>
          </div>
        </div>
        {/* salary expectations */}
        <div className="flex flex-col gap-16">
          <div className="text-sm font-semibold">
            <p className="text-gray-500">Riligion</p>
            <p className="text-gray-800">{datas?.religion ? datas?.religion : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsTable;
