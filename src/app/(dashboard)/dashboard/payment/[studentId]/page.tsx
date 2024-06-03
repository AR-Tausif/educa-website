"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  useGetDueStudentPaymentByClassAndStudentIdQuery,
  useUpdateStudentPaymentByClassIdAndStudentIdMutation,
} from "@/redux/features/student-payment/studentPaymentApi";
import { useGetStudentByStudentIdQuery } from "@/redux/features/student/createStudentApi";
import { StudentPayment } from "@/types";
import {
  TUpdateStudentPayment,
  TUpdateStudentPaymentInputFields,
} from "@/types/payment.type";
import { FormEvent, useState } from "react";

import { useForm } from "react-hook-form";

const SinglePaymentPage = ({ params }: { params: { studentId: string } }) => {
  // const [paymentState, setPaymentState] = useState({
  //   admissionFees: 0,
  //   reAdmissionFees: 0,
  //   yearlyMonthFees: 0,
  //   books: 0,
  //   examFees: 0,
  //   picnicFees: 0,
  //   stationeries: 0,
  //   studyTour: 0,
  //   idCard: 0,
  //   tie: 0,
  // });
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
    classId: singleStudentData?.data?.class,
  });

  const [
    updateStudentByClassIdAndStudentId,
    { isLoading: updatePaymentLoading },
  ] = useUpdateStudentPaymentByClassIdAndStudentIdMutation();

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
  const onSubmit = async () => {
    console.log("log", formData);

    const updatedData: TUpdateStudentPayment = {
      class: singleStudentData?.data?.class,
      student: params.studentId,
      fees: {
        admissionFees: formData.admissionFees,
        reAdmissionFees: formData.reAdmissionFees,
        yearlyMonthFees: formData.monthlyFees,
        books: formData.books,
        examFees: formData.examFees,
        picnicFees: formData.picnicFees,
        stationeries: formData.stationeries,
        studyTour: formData.studyTour,
        idCard: formData.idCard,
        tie: formData.tie,
      },
      discountOnFees: formData.discountOnFees,
      cashCollection: formData.cashCollection,
    };
    console.log({ updatedData });

    try {
      console.log("updated data : ====> ", updatedData);
      const res = await updateStudentByClassIdAndStudentId(updatedData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const paymentFields = [
    {
      label: "Monthly Fees",
      id: TUpdateStudentPaymentInputFields.monthlyFees,
      name: TUpdateStudentPaymentInputFields.monthlyFees,
      placeholder: "55555",
    },
    {
      label: "Admission Fees",
      id: TUpdateStudentPaymentInputFields.admissionFees,
      name: TUpdateStudentPaymentInputFields.admissionFees,
      placeholder: "55555",
    },
    {
      label: "Readmission Fees",
      id: TUpdateStudentPaymentInputFields.reAdmissionFees,
      name: TUpdateStudentPaymentInputFields.reAdmissionFees,
      placeholder: "55555",
    },
    {
      label: "Books Fees",
      id: TUpdateStudentPaymentInputFields.books,
      name: TUpdateStudentPaymentInputFields.books,
      placeholder: "55555",
    },
    {
      label: "Picnic Fees",
      id: TUpdateStudentPaymentInputFields.picnicFees,
      name: TUpdateStudentPaymentInputFields.picnicFees,
      placeholder: "55555",
    },
    {
      label: "ID Card",
      id: TUpdateStudentPaymentInputFields.idCard,
      name: TUpdateStudentPaymentInputFields.idCard,
      placeholder: "55555",
    },
    {
      label: "Exam Fees",
      id: TUpdateStudentPaymentInputFields.examFees,
      name: TUpdateStudentPaymentInputFields.examFees,
      placeholder: "55555",
    },
    {
      label: "Stationeries Fees",
      id: TUpdateStudentPaymentInputFields.stationeries,
      name: TUpdateStudentPaymentInputFields.stationeries,
      placeholder: "55555",
    },
    {
      label: "Study Tour",
      id: TUpdateStudentPaymentInputFields.studyTour,
      name: TUpdateStudentPaymentInputFields.studyTour,
      placeholder: "55555",
    },
    {
      label: "Tie Fees",
      id: TUpdateStudentPaymentInputFields.tie,
      name: TUpdateStudentPaymentInputFields.tie,
      placeholder: "55555",
    },
    // Add more fields as needed
  ];

  return (
    <>
      <div className="grid grid-cols-3">
        <h1>NAME OF STUDENT : {singleStudentData?.data?.studentName}</h1>
        <h1>ID NO</h1>
        <h1>CLASS : {singleStudentData?.data?.class?.name.toUpperCase()}</h1>
      </div>
      <div className="border-4 mt-5 border-blue-700"></div>

      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {/* <h1>
            Payment Recieved By:
            <Input
              {...register("paymentReceivedBy")}
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </h1> */}
          <h1>
            Paymented By:{" "}
            <Input
              type="text"
              // {...register("paymentBy")}
              placeholder="Enter name"
              required
            />
          </h1>
        </div>
        <div className="border-2 mt-5 border-blue-700"></div>

        <Table>
          <TableBody className="grid grid-cols-2 gap-3">
            {paymentFields.map((field) => (
              <TableRow key={field.id} className="w-96">
                <TableCell className="bg-[#d8b0ca] border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                  <Checkbox id="terms" className="mr-3" />
                </TableCell>
                <TableCell className="font-medium border-blue-600 border-t-4 border-b-4 bg-[#d8b0ca]">
                  {field.label}:
                </TableCell>
                <TableCell className="bg-[#d8b0ca] font-medium border-blue-600 border-b-4 border-t-4 border-r-4 text-red-500">
                  <Input
                    type="number"
                    className="text-xl w-72"
                    placeholder={field.placeholder}
                    id={field.id}
                    name={field.name}
                    onChange={(e) => handleOnchangeField(e)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-4 mt-5 border-blue-700"></div>

        <Table className="mt-10 ">
          <TableBody>
            <TableRow className="flex justify-center mt-5 mb-5">
              <TableCell className=" w-64 border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                Due Total Fees:
              </TableCell>
              <TableCell className=" w-72 font-medium border-blue-600 border-b-4 border-t-4 border-r-4 text-red-500">
                <h1>{stdPayDueData?.data?.totalDue || 0}</h1>
              </TableCell>
            </TableRow>

            <TableRow className="flex justify-center mt-5 mb-5">
              <TableCell className=" w-64 border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                Present Total Fee:
              </TableCell>
              <TableCell className=" w-72 font-medium border-blue-600 border-b-4 border-t-4 border-r-4 text-blue-500">
                <h1>{presentInputTotal || 0}</h1>
              </TableCell>
            </TableRow>

            <TableRow className="flex justify-center mt-5 mb-5">
              <TableCell className=" w-64 border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                Present + Due Fees :
              </TableCell>
              <TableCell className=" w-72 font-medium border-blue-600 border-b-4 border-t-4 border-r-4 text-blue-600">
                <h1>{presentSumDueTotalFees}</h1>
                {/* <h1>
                  {(stdPayDueData?.data.totalDue || 0) +
                    (presentInputTotal || 0)}
                </h1> */}
              </TableCell>
            </TableRow>

            <TableRow className="flex justify-center mt-5 mb-5">
              <TableCell className=" w-64 border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                Discount % :
              </TableCell>
              <TableCell className=" w-72 font-medium border-blue-600 border-b-4 border-t-4 border-r-4 ">
                <Input
                  // {...register("Discount")}
                  type="number"
                  className="text-xl"
                  placeholder="15%"
                  id={TUpdateStudentPaymentInputFields.discountOnFees}
                  name={TUpdateStudentPaymentInputFields.discountOnFees}
                  onChange={(e) => handleOnchangeField(e)}
                />
              </TableCell>
            </TableRow>

            <TableRow className="flex justify-center mt-5 mb-5">
              <TableCell className=" w-64 border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                Discount Amount :
              </TableCell>
              <TableCell className=" w-72 font-medium border-blue-600 border-b-4 border-t-4 border-r-4 text-yellow-400">
                <h1>1000</h1>
              </TableCell>
            </TableRow>

            <TableRow className="flex justify-center mt-5 mb-5">
              <TableCell className=" w-64 border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                Cash Collocation :
              </TableCell>
              <TableCell className=" w-72 font-medium border-blue-600 border-b-4 border-t-4 border-r-4 text-blue-500">
                <Input
                  // {...register("CashCollocation")}
                  type="number"
                  className="text-xl"
                  placeholder="55555"
                  id={TUpdateStudentPaymentInputFields.cashCollection}
                  name={TUpdateStudentPaymentInputFields.cashCollection}
                  onChange={(e) => handleOnchangeField(e)}
                />
              </TableCell>
            </TableRow>
            <div className="flex justify-center items-center">
              <p
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
                onClick={handleCalculateAllFees}
              >
                Calculator Now
              </p>
            </div>

            <TableRow className="flex justify-center mt-5 mb-5">
              <TableCell className=" w-64 border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
                New Due Fees:
              </TableCell>
              <TableCell className=" w-72 font-medium border-blue-600 border-b-4 border-t-4 border-r-4 text-red-500">
                <h1>
                {presentSumDueTotalFees - formData.cashCollection || 0}
                </h1>
                {/* <h1>
                  {(stdPayDueData?.data?.totalDue || 0) -
                    (presentInputTotal || 0) -
                    formData.cashCollection || 0}
                </h1> */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex justify-end items-end mt-4">
          <Button type="submit" className="mb-36">
            Payment Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default SinglePaymentPage;
