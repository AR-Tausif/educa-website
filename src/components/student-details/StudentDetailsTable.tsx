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
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { FaArrowAltCircleDown, FaPrint } from "react-icons/fa";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import SingleStudentReceipt from "../payment/SingleStudentReceipt";
import { ScrollArea } from "../ui/scroll-area";
import { IoEye } from "react-icons/io5";
import { Checkbox } from "../ui/checkbox";
import { Loader } from "lucide-react";
import { useGetStudentPaymentHistoryByClassAndStudentIdQuery } from "@/redux/features/student-payment/studentPaymentApi";
import { usePDF } from "react-to-pdf";
import SectionTitle from "../common/SectionTitle";
import { TSinglePayInfo } from "@/types/payment.type";

const StudentDetailsTable = ({ studentId }: { studentId: string }) => {

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const {
    data: studentDetail,
    error,
    isLoading,
  } = useGetStudentByStudentIdQuery(studentId);
  const {
    data: stdPayHistoryData,
    isLoading: stdPayHistoryLoading,
    isSuccess: stdPayHistoryIsSuccess,
    error: stdPayHistoryIsError,
  } = useGetStudentPaymentHistoryByClassAndStudentIdQuery({
    classId: studentDetail?.data?.class._id,
    studentId: studentId,
  });

  if (isLoading) {
    return <><span className="pr-2">Please wait </span> <Loader className="animate-spin"/></>
  }
  const datas: TStudent = studentDetail?.data;
 
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
      
      <div className="mt-16 pb-16">
        {/* <SectionTitle title="Pay Section" /> */}
        <div>
          <h5 className="text-center text-black font-bold text-2xl py-4 border-b">
            All Payment History
          </h5>

          <Table className="border">
            <TableCaption className="py-5">A list of your recent Payment History.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>S.L</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>View</TableHead>
                {/* <TableHead>Print </TableHead>
                <TableHead>Download</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {stdPayHistoryData?.data?.map(
                (invoice: TSinglePayInfo, index: number) => (
                  <TableRow key={invoice._id}>
                    <TableCell className=" text-xl">
                      <Checkbox id="terms" className="mr-3" />
                      {index + 1}
                    </TableCell>

                    <TableCell className="font-medium ">
                      {studentDetail?.data?.studentName}
                    </TableCell>
                    <TableCell className="font-medium">
                      {studentDetail?.data?.class?.name}
                    </TableCell>

                    <TableCell className="font-medium  text-purple-700">
                      {invoice.date ? new Date(invoice.date).toDateString() : "..."}
                    </TableCell>

                    <TableCell className="font-medium  text-black">
                      <Sheet>
                        <SheetTrigger asChild>
                          <IoEye className="text-2xl" />
                        </SheetTrigger>
                        <SheetContent>
                          <ScrollArea className="h-[90vh] w-auto">
                            <SingleStudentReceipt
                              targetRef={targetRef}
                              studentDetail={studentDetail?.data}
                              singlePayInfo={invoice}
                            />
                            <SheetFooter>
                              <SheetClose asChild>
                                <Button
                                  onClick={() => toPDF()}
                                  className="mr-16"
                                >
                                  Download PDF
                                </Button>
                              </SheetClose>
                            </SheetFooter>
                          </ScrollArea>
                        </SheetContent>
                      </Sheet>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default StudentDetailsTable;
