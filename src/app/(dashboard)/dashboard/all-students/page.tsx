import Link from "next/link";
import StudentsTable from "@/components/all-student/StudentsTable";



const AllStudentsPage = () => {

  return (
    <div className="h-screen">
      <div className="flex justify-end items-end">
        <Link href="/dashboard/add-student">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
            Add New Student
          </button>
        </Link>
      </div>
      <h1 className="text-center text-black font-bold text-2xl">
        All Students
      </h1>

      <StudentsTable/>
    </div>
  );
};

export default AllStudentsPage;
