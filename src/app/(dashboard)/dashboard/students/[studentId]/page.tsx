
import Image from "next/image";
import AvatarImage from "@/assets/student/avatar.png";
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

      <StudentDetailsTable studentId={params.studentId}/>
    </div>
  );
};

export default SingleStudentPage;
