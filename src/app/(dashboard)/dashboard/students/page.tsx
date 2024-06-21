import Link from "next/link";
import StudentsTable from "@/components/all-student/StudentsTable";
import FormHeadingContent from "@/components/FormHeadingContent";



const AllStudentsPage = () => {

  return (
    <div className="h-screen px-5 pb-10">
      <FormHeadingContent title="All students" desc="Here listed all students from our server." className="text-center pb-5" />
      <StudentsTable/>
    </div>
  );
};

export default AllStudentsPage;
