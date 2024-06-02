
import { TPaymentHistory, TSinglePayInfo } from "@/types/payment.type";
import PaymentHistoryReceipt from "./PaymentHistoryReceipt";

type TProps = { singlePayInfo: TPaymentHistory, studentName: any, targetRef: any }

export default function AllPayHistorySingleReceipt({ singlePayInfo, studentName, targetRef }: TProps) {

    return (
        <div ref={targetRef} className="bg-white p-8 max-w-4xl mx-auto my-12 border rounded-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <SchoolIcon className="h-8 w-8 text-gray-700" />
                    <h1 className="text-xl font-semibold ml-2">
                        Educa International School
                    </h1>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Fees Receipt</h2>
                    <p className="text-sm">House #1, Road #1, Area, Country</p>
                    <p className="text-sm">
                        Tel: 0123 456789, Email: info@educaschool.com
                    </p>
                </div>
            </div>
            <PaymentHistoryReceipt singlePayInfo={singlePayInfo} studentName={studentName} />
            <div className="text-sm mt-4">
                <p>
                    * Please make sure that fees are paid by the 7th of every month in
                    advance and avoid any late payment charges. For any information or
                    suggestion please talk to us at our office.
                </p>
            </div>
        </div>
    );
}

function SchoolIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
            <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
            <path d="M18 5v17" />
            <path d="m4 6 8-4 8 4" />
            <path d="M6 5v17" />
            <circle cx="12" cy="9" r="2" />
        </svg>
    );
}
