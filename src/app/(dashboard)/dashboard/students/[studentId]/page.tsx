import StudentDetails from "@/components/all-student/StudentDetail";
import Image from "next/image";
import AvatarImage from "@/assets/student/avatar.png";
import { Separator } from "@/components/ui/separator";
import StudentDetailsTable from "@/components/student-details/StudentDetailsTable";
const SingleStudentPage = ({ params }: { params: { studentId: string } }) => {
  return (
    <div className="px-20">
      <p className="text-3xl text-center font-bold shadow-sm pb-4">
        {" "}
        Student Details
      </p>

      {/* <StudentDetails studentId={params.studentId}/> */}

      {/* Start here... */}

      <div className="flex items-center gap-4 py-10">
        <div className="w-32 h-32">
          <Image
            alt="Student Image"
            src={AvatarImage}
            className="w-full h-full rounded-full border-2 border-blue-400"
          />
        </div>
        <div className="space-y-4">
          <div className="">
            <p className="text-xl font-bold">Alina Bernasconi</p>
            <p className="text-sm">Student</p>
          </div>
          <div className="flex gap-2">
            <p>
              Email: <strong>alexandra@gmail.com</strong>
            </p>{" "}
            {" | "}
            <p>
              Phone: <strong>+7 (900) 000-00-00</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {/* About me */}
        <StudentDetailsTable studentId={params.studentId} />
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
                <p className="text-gray-500">City</p>
                <p className="text-gray-800">Moscow</p>
              </div>
            </div>
            {/* dob */}
            <div className="flex flex-col gap-16">
              <div className="text-sm font-semibold">
                <p className="text-gray-500">Date of birth</p>
                <p className="text-gray-800">03.08.1996</p>
              </div>
            </div>
            {/* desirable position */}

            <div className="flex flex-col gap-16">
              <div className="text-sm font-semibold">
                <p className="text-gray-500">Desirable position</p>
                <p className="text-gray-800">Lawyer</p>
              </div>
            </div>
            {/* salary expectations */}
            <div className="flex flex-col gap-16">
              <div className="text-sm font-semibold">
                <p className="text-gray-500">Slary expectaions</p>
                <p className="text-gray-800">50-80000 rub</p>
              </div>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="border rounded-lg">
          <div className="flex justify-between p-4">
            <p>education</p>
            <p>Edit</p>
          </div>
          <Separator />
          <div className="p-4 flex justify-between">
            {/* city */}
            <div className="text-sm font-semibold">
              <p className="text-gray-500">University</p>
              <p className="text-gray-800">MSU Lomonosov</p>
            </div>
            {/* dob */}
            <div className="text-sm font-semibold">
              <p className="text-gray-500">Specialization</p>
              <p className="text-gray-800">Lawyer</p>
            </div>
            {/* desirable position */}
            <div className="text-sm font-semibold">
              <p className="text-gray-500">Facualty</p>
              <p className="text-gray-800">Juridical</p>
            </div>
            {/* salary expectations */}
            <div className="text-sm font-semibold">
              <p className="text-gray-500">Level of education</p>
              <p className="text-gray-800">Highest</p>
            </div>
          </div>
          <div className="p-4 flex justify-between">
            {/* city */}
            <div className="text-sm font-semibold">
              <p className="text-gray-500">Year of graduation</p>
              <p className="text-gray-800">2021</p>
            </div>
            {/* dob */}
            <div className="text-sm font-semibold">
              <p className="text-gray-500">Middle point</p>
              <p className="text-gray-800">100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPage;
