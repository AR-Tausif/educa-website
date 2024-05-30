import UpdateStudentForm from '@/components/student-update/StudentUpdateForm'

const UpdateStudentDefaultPage = ({params}:{params:{studentId:string}}) => {
  return (
    <div>UpdateStudentDefaultPage {params.studentId}
    <UpdateStudentForm studentId={params.studentId}/>
    </div>
  )
}

export default UpdateStudentDefaultPage