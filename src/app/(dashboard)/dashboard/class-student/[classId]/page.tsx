import SingleClassStudents from "@/components/class-student/SingleClassStudents";

const DetailsPage = ({ params }: { params: { classId: string } }) => {
  console.log(params);

  return (
    <div>
      <h5>Details Page</h5>
      <SingleClassStudents classId={params.classId}  />
    </div>
  );
};

export default DetailsPage;
