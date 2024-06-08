import { TStudent } from "@/types/student";
import React from "react";

const AboutMe = ({ studentData }: { studentData: TStudent }) => {
  return (
    <div className="p-6 flex justify-between">
      {/* city */}
      <div className="flex flex-col gap-16">
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Address</p>
          <p className="text-gray-800">{studentData?.presentAddress ? studentData?.presentAddress : "N/A" }</p>
        </div>
      </div>
      {/* dob */}
      <div className="flex flex-col gap-16">
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Date of birth</p>
          <p className="text-gray-800">{new Date(studentData?.dateOfBirth).toDateString()}</p>
        </div>
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Citizenship</p>
          <p className="text-gray-800">{studentData?.nationality}</p>
        </div>
      </div>
      {/* desirable position */}

      <div className="flex flex-col gap-16">
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Gender</p>
          <p className="text-gray-800">{studentData?.gender}</p>
        </div>
        <div className="text-sm font-semibold">
          <p className="text-gray-500">First Language</p>
          <p className="text-gray-800">
            {studentData?.firstLanguage ? studentData?.firstLanguage : "N/A"}
          </p>
        </div>
      </div>
      {/* salary expectations */}
      <div className="flex flex-col gap-16">
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Riligion</p>
          <p className="text-gray-800">
            {studentData?.class.name ? studentData?.class?.name.toUpperCase() : "N/A"}
          </p>
        </div>
        <div className="text-sm font-semibold">
          <p className="text-gray-500">Class</p>
          <p className="text-gray-800">
            {studentData?.religion ? studentData?.religion : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
