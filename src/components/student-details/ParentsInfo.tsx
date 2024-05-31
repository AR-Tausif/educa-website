import { TStudent } from "@/types/student";
import React from "react";

const ParentsInfo = ({ studentData }: { studentData: TStudent }) => {
  return (
    <div className="p-6 flex justify-between">
      {/* city */}
      <div className="flex flex-col gap-16">
        <div className="text-sm font-semibold">
          <p className="text-gray-500">{"Father's Name"}</p>
          <p className="text-gray-800">{studentData?.fatherName}</p>
        </div>
        <div className="text-sm font-semibold">
          <p className="text-gray-500">{"Mother's Name"}</p>
          <p className="text-gray-800">{studentData?.motherName}</p>
        </div>
      </div>
      {/* dob */}
      <div className="flex flex-col gap-16">
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Phone NO.</p>
          <p className="text-gray-800">{studentData?.fatherPhonNumber ? studentData?.fatherPhonNumber : "N/A"}</p>
        </div>
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Phone NO.</p>
          <p className="text-gray-800">{studentData?.motherPhonNumber ? studentData?.motherPhonNumber : "N/A" }</p>
        </div>
      </div>
      {/* desirable position */}

      <div className="flex flex-col gap-16">
      <div className="text-sm font-semibold">
          <p className="text-gray-500">{"Father's ID"}</p>
          <p className="text-gray-800">{studentData?.fatherIDCardNumber ? studentData?.fatherIDCardNumber : "N/A"}</p>
        </div>
        <div className="text-sm font-semibold">
          <p className="text-gray-500">{"Mother's ID"}</p>
          <p className="text-gray-800">{studentData?.motherIDCardNumber ? studentData?.motherIDCardNumber : "N/A" }</p>
        </div>
      </div>
      {/* salary expectations */}
      <div className="flex flex-col gap-16">
        <div className="text-sm font-semibold">
          <p className="text-gray-500">{"Father's profession"}</p>
          <p className="text-gray-800">
            {studentData?.fatherProfession ? studentData?.fatherProfession : "N/A"}
          </p>
        </div>
        <div className="text-sm font-semibold">
          <p className="text-gray-500">{"Mother's profession"}</p>
          <p className="text-gray-800">
            {studentData?.motherProfession ? studentData?.motherProfession : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentsInfo;
