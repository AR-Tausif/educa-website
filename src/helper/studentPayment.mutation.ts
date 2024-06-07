import { TUpdateStudentPayment } from "@/types/payment.type";

type TInfo = {
    classId: string; studentId: string 
}
const UpdatePaymentMutation = async (
  updateStudentByClassIdAndStudentId: any,
  formData: any,
  info: TInfo
) => {
  console.log("log", formData);

  const updatedData: TUpdateStudentPayment = {
    class: info.classId,
    student: info.studentId,
    fees: {
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
    },
    discountOnFees: formData.discountOnFees,
    cashCollection: formData.cashCollection,
  };
  console.log({ updatedData });

  try {
    console.log("updated data : ====> ", updatedData);
    const res = await updateStudentByClassIdAndStudentId(updatedData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default UpdatePaymentMutation;
