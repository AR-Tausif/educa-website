import SingleClassStudents from "@/components/class-student/SingleClassStudents";

const DetailsPage = ({ params }: { params: { classId: string } }) => {
  console.log(params);

  return (
    <div>
      <h1>Details Page</h1>
      <SingleClassStudents classId={params.classId}  />
    </div>
  );
};

export default DetailsPage;
