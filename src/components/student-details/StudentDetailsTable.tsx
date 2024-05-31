"use client";
import { Separator } from "../ui/separator";
import { useGetStudentByStudentIdQuery } from "@/redux/features/student/createStudentApi";
import { TStudent } from "@/types/student";
import AboutMe from "./AboutMe";
import { SkeletonCard } from "./SkeletonCard";
import ParentsInfo from "./ParentsInfo";
import ProfileImageAndTitle from "./ProfileImageAndTitle";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/utils";

const StudentDetailsTable = ({ studentId }: { studentId: string }) => {
  const {
    data: studentDetail,
    error,
    isLoading,
  } = useGetStudentByStudentIdQuery(studentId);
  const datas: TStudent = studentDetail?.data;
  console.log(error);
  console.log(studentDetail);

  if (isLoading) <SkeletonCard />;
  return (
    <>
      <ProfileImageAndTitle>
        <div className="space-y-4">
          <div className="">
            <p className="text-xl font-bold">
              {datas?.studentName ? datas.studentName : "N/A"}
            </p>
            <p className="text-sm">Student</p>
          </div>
          <div className="flex gap-2">
            {datas?.fatherPhonNumber ? (
              <p>
                Email: <strong>{datas.fatherPhonNumber}</strong>
              </p>
            ) : (
              <p>
                Email: <strong>xxx@gmail.com</strong>
              </p>
            )}{" "}
            {" | "}
            {datas?.fatherPhonNumber ? (
              <p>
                Phone: <strong>+880 {datas.fatherPhonNumber}</strong>
              </p>
            ) : (
              <p>
                Phone: <strong>+880 1XXXX-XXXXX</strong>
              </p>
            )}
          </div>
        </div>
      </ProfileImageAndTitle>
      <div className="space-y-5">
        {/* About me */}

        <div className="border rounded-lg">
          <div className="flex justify-between p-3 px-4 bg-muted">
            <p>About me</p>
            <Link href={`/${APP_ROUTES.UPDATE_STUDENT}/${datas?._id}`}>
              <p className="text-blue-400 font-bold">Edit</p>
            </Link>
          </div>
          <Separator />
          <AboutMe studentData={studentDetail?.data} />
        </div>
        {/* Education */}
        <div className="border rounded-lg">
          <div className="flex justify-between p-3 px-4 bg-muted">
            <p>Parents info</p>
            <Link href={`/${APP_ROUTES.UPDATE_STUDENT}/${datas?._id}`}>
              <p className="text-blue-400 font-bold">Edit</p>
            </Link>
          </div>
          <Separator />
          <ParentsInfo studentData={studentDetail?.data} />
        </div>
      </div>
    </>
  );
};

export default StudentDetailsTable;
