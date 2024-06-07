import FormHeadingContent from '@/components/FormHeadingContent'
import UpdateStudentForm from '@/components/student-update/StudentUpdateForm'

const UpdateStudentDefaultPage = ({params}:{params:{studentId:string}}) => {
  return (
    <div>
      <p className="text-xl font-semibold text-center underline text-purple-800">Update Student</p>
      <div className='pb-4 flex justify-center items-center'>
      <FormHeadingContent className="p-0 pb-6 text-center" title="Student Information" />
      </div>
    <UpdateStudentForm studentId={params.studentId}/>
    </div>
  )
}

export default UpdateStudentDefaultPage