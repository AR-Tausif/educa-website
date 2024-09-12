import { useGetSingleAcademicPaymentByClassIdQuery } from "@/redux/features/academic-payment/academicPaymentApi"

const ViewSingleAcademicPayment = ({ classId }: { classId: string }) => {
    const { data: academicSinglePaymentData, error, } = useGetSingleAcademicPaymentByClassIdQuery({ classId })

    // Type assertion for paymentInfo
    const academicInputDatas = academicSinglePaymentData?.data as Record<string, number>;

    //     console.log(error)
    //   // Exclude certain fields
    //   const {  class:___, student, createdAt, updatedAt, createdBy, year, ...fees } = academicInputDatas;
    //   const feesArr = Object.keys(fees)
    //   console.log(feesArr)
    return (
        <div className="grid grid-cols-2 border">

            <p className="border pl-6 py-1.5">Yearly Month Fees : {academicInputDatas?.yearlyMonthFees}</p>
            <p className="border pl-6 py-1.5">Admission Fees : {academicInputDatas?.admissionFees}</p>
            <p className="border pl-6 py-1.5">Readmission Fees : {academicInputDatas?.reAdmissionFees} </p>
            <p className="border pl-6 py-1.5">Book Fees : {academicInputDatas?.books}</p>
            <p className="border pl-6 py-1.5">Stationeries Fees : {academicInputDatas?.stationeries}</p>
            <p className="border pl-6 py-1.5">Id Card Fees : {academicInputDatas?.idCard}</p>
            <p className="border pl-6 py-1.5">Tie Fees : {academicInputDatas?.tie}</p>
            <p className="border pl-6 py-1.5">Study Tour Fees : {academicInputDatas?.studyTour}</p>
            <p className="border pl-6 py-1.5">Exam Fees : {academicInputDatas?.examFees}</p>
            <p className="border pl-6 py-1.5">Picnic Fees : {academicInputDatas?.picnicFees}</p>

        </div>
    )
}

export default ViewSingleAcademicPayment