import React from "react";
import { Checkbox } from "../ui/checkbox";
import { TPaymentHistory } from "@/types/payment.type";
import { toWords } from 'number-to-words';


type TProps = { singlePayInfo: Partial<TPaymentHistory>, studentName: string }

const PaymentHistoryReceipt = ({ singlePayInfo, studentName }: TProps) => {

    const {
        _id,
        discountOnFees,
        cashCollection,
        student,
        class: studentClass,
        studentPayment,
        year,
        date,
        ...paymentInfo
    } = singlePayInfo;
     // Type assertion for paymentInfo
  const academicInputDatas = paymentInfo as Record<string, number>;

  // Exclude certain fields
  const { discountOnFees: _, cashCollection: __, class:___, student:____, studentPayment: _____, createdAt, updatedAt,  ...fees } = academicInputDatas;
  console.log(fees)

    const feesArray = Object.keys(fees)
    const totalFees = feesArray.reduce((sum, key) => sum + (fees[key] || 0), 0);

    return (
        <>
            <div className="border-t border-b py-4">
                <div className="flex justify-between">
                    <div>
                        <p>
                            <strong>Name of Student:</strong> {studentName}
                        </p>
                        <p>
                            <strong>ID No: </strong> {singlePayInfo?._id}
                        </p>
                    </div>
                    <div>
                        <p>
                            {/* TODO: Class key changing */}
                            Class: <strong> {studentClass?.name?.toUpperCase()}</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="flex justify-between">
                    <p>
                        <strong>Amount Received:</strong> {totalFees ? totalFees : "N/A"} </p>
                    <p>
                        <strong> In Words: </strong> {totalFees && toWords(totalFees)}
                    </p>
                </div>
                <p>
                    <strong>For the month of:</strong> Apr-24
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {feesArray.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
                        <div className="space-x-3">
                            <Checkbox id={item.toLowerCase()} />
                            <label htmlFor="monthly-fees">{item}</label>
                        </div>
                        <p className="bg-muted w-32 px-4 py-1">{fees[item]}</p>
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

export default PaymentHistoryReceipt;
