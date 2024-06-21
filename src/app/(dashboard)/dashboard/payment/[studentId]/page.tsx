"use client";

import FormHeadingContent from "@/components/FormHeadingContent";
import ProfileImageAndTitle from "@/components/all-student/ProfileImageAndTitle";
import PaymentForm from "@/components/payment/PaymentForm";
import { Toaster } from "@/components/ui/toaster";
import { useGetSingleAcademicPaymentByClassIdQuery } from "@/redux/features/academic-payment/academicPaymentApi";
import {
  useGetDueStudentPaymentByClassAndStudentIdQuery,
} from "@/redux/features/student-payment/studentPaymentApi";
import { useGetStudentByStudentIdQuery } from "@/redux/features/student/createStudentApi";
import { StudentPayment } from "@/types/index";
import {
  TAcademicPayment,
} from "@/types/payment.type";
import { Loader } from "lucide-react";
import { FormEvent, useState } from "react";

import { useForm } from "react-hook-form";

const SinglePaymentPage = ({ params }: { params: { studentId: string } }) => {

  const {
    data: singleStudentData,
    isLoading: studentIsloading,
    error: singleStudentError,
  } = useGetStudentByStudentIdQuery(params.studentId);
  const {
    data: stdPayDueData,
    isLoading: stdPayDueIsLoading,
    error: stdPayDueError,
  } = useGetDueStudentPaymentByClassAndStudentIdQuery({
    studentId: singleStudentData?.data?._id,
    classId: singleStudentData?.data?.class._id,
  });

  const {
    data: academicSinglePaymentData,
    error,
    isLoading: academicSinglePaymentIsLoading,
  } = useGetSingleAcademicPaymentByClassIdQuery({
    classId: singleStudentData?.data?.class?._id,
  });
  // =======================================
  // Use From add
  // =======================================
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentPayment>();

  const [formData, setFormData] = useState({
    admissionFees: 0,
    reAdmissionFees: 0,
    monthlyFees: 0,
    books: 0,
    picnicFees: 0,
    idCard: 0,
    examFees: 0,
    stationeries: 0,
    studyTour: 0,
    tie: 0,
    discountOnFees: 0,
    cashCollection: 0,
  });

  const [presentInputTotal, setPresentInputTotal] = useState(0);
  const presentSumDueTotalFees =
    (stdPayDueData?.data?.totalDue || 0) + (presentInputTotal || 0);
  const academicPayment = academicSinglePaymentData?.data as TAcademicPayment;

  const handleOnchangeField = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: parseInt(value),
    });
    const { discountOnFees, cashCollection, ...academicInputDatas } = formData;
    const totalInputFees = Object.values(academicInputDatas).reduce(
      (sum, value) => sum + value,
      0
    );

    setPresentInputTotal(totalInputFees);
  };

  const handleCalculateAllFees = () => {
    console.log({ formData });
    const { discountOnFees, cashCollection, ...academicInputDatas } = formData;
    const totalInputFees = Object.values(academicInputDatas).reduce(
      (sum, value) => sum + value,
      0
    );
    setPresentInputTotal(totalInputFees);
    console.log({ totalInputFees, stdPayDueData });
  };
  // const onSubmit = async () => {
  //   console.log("log", formData);

  //   const updatedData: TUpdateStudentPayment = {
  //     class: singleStudentData?.data?.class,
  //     student: params.studentId,
  //     fees: {
  //       admissionFees: formData.admissionFees,
  //       reAdmissionFees: formData.reAdmissionFees,
  //       yearlyMonthFees: formData.monthlyFees,
  //       books: formData.books,
  //       examFees: formData.examFees,
  //       picnicFees: formData.picnicFees,
  //       stationeries: formData.stationeries,
  //       studyTour: formData.studyTour,
  //       idCard: formData.idCard,
  //       tie: formData.tie,
  //     },
  //     discountOnFees: formData.discountOnFees,
  //     cashCollection: formData.cashCollection,
  //   };
  //   console.log({ updatedData });

  //   try {
  //     console.log("updated data : ====> ", updatedData);
  //     const res = await updateStudentByClassIdAndStudentId(updatedData);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const paymentFields = [
  //   {
  //     label: "Monthly Fees",
  //     id: TUpdateStudentPaymentInputFields.monthlyFees,
  //     name: TUpdateStudentPaymentInputFields.monthlyFees,
  //     placeholder: academicPayment?.monthlyFees,
  //   },
  //   {
  //     label: "Admission Fees",
  //     id: TUpdateStudentPaymentInputFields.admissionFees,
  //     name: TUpdateStudentPaymentInputFields.admissionFees,
  //     placeholder: academicPayment?.admissionFees,
  //   },
  //   {
  //     label: "Readmission Fees",
  //     id: TUpdateStudentPaymentInputFields.reAdmissionFees,
  //     name: TUpdateStudentPaymentInputFields.reAdmissionFees,
  //     placeholder: academicPayment?.reAdmissionFees,
  //   },
  //   {
  //     label: "Books Fees",
  //     id: TUpdateStudentPaymentInputFields.books,
  //     name: TUpdateStudentPaymentInputFields.books,
  //     placeholder: academicPayment?.books,
  //   },
  //   {
  //     label: "Picnic Fees",
  //     id: TUpdateStudentPaymentInputFields.picnicFees,
  //     name: TUpdateStudentPaymentInputFields.picnicFees,
  //     placeholder: academicPayment?.picnicFees,
  //   },
  //   {
  //     label: "ID Card",
  //     id: TUpdateStudentPaymentInputFields.idCard,
  //     name: TUpdateStudentPaymentInputFields.idCard,
  //     placeholder: academicPayment?.idCard,
  //   },
  //   {
  //     label: "Exam Fees",
  //     id: TUpdateStudentPaymentInputFields.examFees,
  //     name: TUpdateStudentPaymentInputFields.examFees,
  //     placeholder: academicPayment?.examFees,
  //   },
  //   {
  //     label: "Stationeries Fees",
  //     id: TUpdateStudentPaymentInputFields.stationeries,
  //     name: TUpdateStudentPaymentInputFields.stationeries,
  //     placeholder: academicPayment?.stationeries,
  //   },
  //   {
  //     label: "Study Tour",
  //     id: TUpdateStudentPaymentInputFields.studyTour,
  //     name: TUpdateStudentPaymentInputFields.studyTour,
  //     placeholder: academicPayment?.studyTour,
  //   },
  //   {
  //     label: "Tie Fees",
  //     id: TUpdateStudentPaymentInputFields.tie,
  //     name: TUpdateStudentPaymentInputFields.tie,
  //     placeholder: academicPayment?.tie,
  //   },
  //   // Add more fields as needed
  // ];

  if (academicSinglePaymentIsLoading) {
    return (
      <div className="text-xl h-full w-full flex justify-center items-center text-purple-700">
        {" "}
        <span className="pr-2">Please wait </span> <Loader className="animate-spin"/>
      </div>
    );
  }
  console.log(singleStudentData?.data)
  return (
    <>
      <Toaster />
      <ProfileImageAndTitle>
        <div className="space-y-4">
          <div className="">
            <p className="text-xl font-bold">
              {singleStudentData?.data.studentName ? singleStudentData.data.studentName : "N/A"}
            </p>
            <p className="text-sm"> <strong>Class:</strong> {singleStudentData?.data?.class?.name} </p>
          </div>
        </div>
      </ProfileImageAndTitle>
      <FormHeadingContent
        className="text-center"
        title="Academic fees"
        desc="Here listed all input and also calculating onchange value"
      />
      <PaymentForm
        student={singleStudentData?.data}
        stdPayDueData={stdPayDueData?.data}
        academicSinglePaymentData={academicSinglePaymentData?.data}
      />
    </>
  );
};

export default SinglePaymentPage;