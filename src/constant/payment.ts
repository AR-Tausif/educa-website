import { PaymentField } from "@/types/payment.type";

export const paymentValidNames = [
    "monthly",
    "admission",
    "readmission",
    "picnic",
    "exam",
    "studyTour",
    "books",
    "idCard",
    "stationeries",
    "tie",
    "others"
  ] as const;

  export const fieldDisplayNames: Record<string, string> = {
    admissionFees: "Admission Fees",
    reAdmissionFees: "Readmission Fees",
    yearlyMonthFees: "Monthly Fees",
    examFees: "Exam Fees",
    picnicFees: "Picnic",
    studyTour: "Study Tour",
    stationeries: "Stationeries",
    books: "Books",
    idCard: "ID Card",
    tie: "Tie",
    others: "Others"
    // Add other fields here
  };
  


export const paymentFields: PaymentField[] = [
    {
      label: "Monthly Fees",
      id: "yearlyMonthFees",
      name: "monthly",
      placeholder: "academicPayment?.yearlyMonthFees",
    },
    {
      label: "Admission Fees",
      id: "admissionFees",
      name: "admission",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "Readmission Fees",
      id: "reAdmissionFees",
      name: "readmission",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "Picnic",
      id: "picnicFees",
      name: "picnic",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "Exam Fees",
      id: "examFees",
      name: "exam",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "Study Tour",
      id: "studyTour",
      name: "studyTour",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "Books",
      id: "books",
      name: "books",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "ID Card",
      id: "idCard",
      name: "idCard",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "Stationeries",
      id: "stationeries",
      name: "stationeries",
      placeholder: "academicPayment?.admissionFees",
    },
    {
      label: "Tie",
      id: "tie",
      name: "tie",
      placeholder: "academicPayment?.admissionFees",
    },
    
    // Add more fields as needed
  ];
  
  export const paymentDefaultVaues = {
    monthly: "",
    admission: "",
    readmission: "",
    picnic: "",
    exam: "",
    studyTour: "",
    books: "",
    idCard: "",
    stationeries: "",
    tie: "",
    others:"",
    discountOnFees:"",
    cashCollection: "",
  }
  
  export const paymentManageValues = {
    discountOnFees:"",
    cashCollection: "",
  }
  