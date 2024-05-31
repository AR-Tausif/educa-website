import React from "react";
import { Checkbox } from "../ui/checkbox";

const PaymentHistoryArea = () => {
  return (
    <div className="space-y-3 border p-4 rounded-md">
      {/* attendance div */}
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">Payment History</p>
        <div className="flex gap-3 text-sm">
          <div className="bg-blue-50 flex justify-between items-center rounded-md">
            <p className=" px-2 py-0">Last 6 months</p>
          </div>
          <div className="bg-blue-50 flex justify-between items-center rounded-md">
            <p className=" px-2">Class 10</p>
          </div>
        </div>
      </div>

      {/* attendance div */}
      <div className="space-x-3 flex">
        <div className="space-x-2">
          <Checkbox /> <span className="text-sm"> Present</span>
        </div>
        <div className="space-x-2">
          <Checkbox /> <span className="text-sm"> Absent</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryArea;
