import { AddStudentForm } from "@/components/add-student/AddStudentForm";
import PrivateRoute from "@/lib/PrivateRoute";
import React from "react";

const AddStudentPage = async () => {

  
  return (
    <PrivateRoute>
    <div className="">
      <p className="text-4xl font-semibold text-center text-blue-600">Add Student Information</p>
      <AddStudentForm />
    </div>
    </PrivateRoute>
  );
};

export default AddStudentPage;
