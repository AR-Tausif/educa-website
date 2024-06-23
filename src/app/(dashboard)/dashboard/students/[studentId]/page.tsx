import StudentDetailsTable from "@/components/student-details/StudentDetailsTable";
const SingleStudentPage = ({ params }: { params: { studentId: string } }) => {
  return (
    <div className="px-20">

      {/* Start here... */}
      <StudentDetailsTable studentId={params.studentId}/>
    </div>
  );
};

export default SingleStudentPage;
