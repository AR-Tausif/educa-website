import StudentDetails from "@/components/all-student/StudentDetail"
const SingleStudentPage = ({params}:{params:{studentId: string}}) => {
  
  return (
    <div>
       <p className="text-3xl text-center font-bold shadow-sm pb-4"> Student Details</p>
       <StudentDetails studentId={params.studentId}/>
    </div>
  )
}

export default SingleStudentPage