import React from "react";
import { Checkbox } from "../ui/checkbox";
import { TSinglePayInfo } from "@/types/payment.type";
import { TStudent } from "@/types/student";


type TProps = {singlePayInfo:TSinglePayInfo, studentDetail:TStudent}

const PaymentReceiptDetails = ({singlePayInfo, studentDetail}:TProps) => {

  const { _id, discountOnFees, date,  cashCollection, ...paymentInfo } = singlePayInfo;
  console.table(studentDetail)
    const  feesArray= Object.keys(paymentInfo)
  // const feesArray = [
  //   "Monthly Fees",
  //   "Admission Fees",
  //   "Readmission Fees",
  //   "Exam Fees",
  //   "ID Card",
  //   "Stationaires",
  //   "Books",
  //   "Tie",
  //   "Picnic",
  //   "Others",
  // ];
  return (
    <>
      <div className="border-t border-b py-4">
        <div className="flex justify-between">
          <div>
            <p>
              <strong>Name of Student:</strong> {studentDetail?.studentName}
            </p>
            <p>
              <strong>ID No: </strong> {singlePayInfo?._id}
            </p>
          </div>
          <div>
            <p>
              {/* TODO: Class key changing */}
              <strong>Class:</strong> {studentDetail?.class?.name.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <p>
          <strong>Amount Received:</strong> 12,800 in words: Twelve Thousand
          Eight Hundred Taka
        </p>
        <p>
          <strong>For the month of:</strong> Apr-24
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          {feesArray.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-3">
              <div className="space-x-3">
              <Checkbox id={item.toLowerCase()} />
              <label htmlFor="monthly-fees">{item}</label>
              </div>
              <p>{paymentInfo[item]}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {feesArray.map((item, index) => (
            <div key={index} className="flex gap-3 items-center border-b pb-3">
              <Checkbox id={item.toLowerCase()} />
              <label htmlFor="monthly-fees">{item}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>
            <strong>{"Parent's signature:"}</strong>
          </p>
        </div>
        <div>
          <p>
            <strong>Received by:</strong> Arshad
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm">Date: 20-Apr-24</p>
        </div>
        <div className="flex items-center">
          <div className="space-x-3">
            <Checkbox id="parents-copy" />
            <label htmlFor="parents-copy">{"Parent's copy"}</label>
          </div>
          <div className="space-x-3">
            <Checkbox className="ml-4" id="educa-copy" />
            <label htmlFor="educa-copy">{"Educa's copy"}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentReceiptDetails;
