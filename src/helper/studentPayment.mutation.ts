import { TUpdateStudentPayment } from "@/types/payment.type";

type TInfo = {
    classId: string; studentId: string 
}
const UpdatePaymentMutation = async (
  updateStudentByClassIdAndStudentId: any,
  formData: any,
  info: TInfo
) => {
;

  const updatedData: TUpdateStudentPayment = {
    class: info.classId,
    student: info.studentId,
    fees: {
      monthlyFees:0,
      admissionFees: formData.admission,
      reAdmissionFees: formData.readmission,
      yearlyMonthFees: formData.monthly,
      books: formData.books,
      examFees: formData.exam,
      picnicFees: formData.picnic,
      stationeries: formData.stationeries,
      studyTour: formData.studyTour,
      idCard: formData.idCard,
      tie: formData.tie,
      others: formData.others,
    },
    discountOnFees: formData.discountOnFees,
    cashCollection: formData.cashCollection,
  };


  try {

    const res = await updateStudentByClassIdAndStudentId(updatedData);

  } catch (error) {
    console.log(error);
  }
};

export default UpdatePaymentMutation;
