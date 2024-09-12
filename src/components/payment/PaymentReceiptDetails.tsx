import React from "react";
import { Checkbox } from "../ui/checkbox";
import { TSinglePayInfo } from "@/types/payment.type";
import { TStudent } from "@/types/student";
import { toWords } from "number-to-words";
import { fieldDisplayNames } from "@/constant/payment";
import toTitleCase from "@/lib/toTitleCase";

type TProps = { singlePayInfo: TSinglePayInfo; studentDetail: TStudent };

const PaymentReceiptDetails = ({ singlePayInfo, studentDetail }: TProps) => {
  const {
    _id,
    discountOnFees,
    date,
    receivedBy,
    cashCollection,
    createdAt,
    updatedAt,
    ...paymentInfo
  } = singlePayInfo;
  // Type assertion for paymentInfo
  const academicInputDatas = paymentInfo as Record<string, number>;

  // Exclude certain fields
  const {
    discountOnFees: _,
    cashCollection: __,
    class: ___,
    student: ____,
    studentPayment: _____,
    ...fees
  } = academicInputDatas;


  const feesArray = Object.keys(fees).filter(
    (key) => key in fieldDisplayNames && fees[key] > 1
  );

  const totalFees = feesArray.reduce((sum, key) => sum + (fees[key] || 0), 0);


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
              Class:{" "}
              <strong> {studentDetail?.class?.name.toUpperCase()}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="flex justify-between">
          <p>
            <strong>Amount Received:</strong>{" "}
            {totalFees > 0 ? totalFees : cashCollection}{" "}
          </p>
          <p>
            <strong> In Words: </strong>{" "}
            {totalFees
              ? toTitleCase(toWords(totalFees))
              : toTitleCase(toWords(cashCollection))}
          </p>
        </div>
        <p>
          <strong>For the month of:</strong> {new Date(date).getMonth()}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {feesArray.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-3"
          >
            <div className="space-x-3 h-6 flex item-center">
              <Checkbox className="mt-2" checked id={item.toLowerCase()} />
              <p>{fieldDisplayNames[item] || "Others"}</p>
            </div>
            <p className="w-32 bg-muted px-4 py-1 shadow-sm">
              {fees[item] || cashCollection}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>
            <strong>{"Parent's signature:"}</strong>
          </p>
        </div>
        <div>
          <p>
            <strong>Received by:</strong> {receivedBy?.fullName}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm">{new Date(date).toDateString()}</p>
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
