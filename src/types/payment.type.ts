import { paymentValidNames } from "@/constant/payment";
import { TClass, TStudent } from "./student";
import { TUser } from "./user.type";

type TFees = {
  yearlyMonthFees: number;
  admissionFees: number;
  reAdmissionFees: number;
  books: number;
  stationeries: number;
  idCard: number;
  tie: number;
  studyTour: number;
  examFees: number;
  picnicFees: number;
};
export type TUpdateStudentPayment = {
  student: string;
  class: string;
  fees: TFees;
  discountOnFees: number;
  cashCollection: number;
};

export const TUpdateStudentPaymentInputFields = {
  admissionFees: "admissionFees",
  reAdmissionFees: "reAdmissionFees",
  monthlyFees: "monthlyFees",
  books: "books",
  picnicFees: "picnicFees",
  idCard: "idCard",
  examFees: "examFees",
  stationeries: "stationeries",
  studyTour: "studyTour",
  tie: "tie",
  cashCollection: "cashCollection",
  discountOnFees: "discountOnFees",
};

export type TSinglePayInfo = {
  receivedBy:TUser;
  admissionFees: number;
  books: number;
  cashCollection: number;
  date: string;
  discountOnFees: number;
  examFees: number;
  idCard: number;
  picnicFees: number;
  reAdmissionFees: number;
  stationeries: number;
  studyTour: number;
  tie: number;
  yearlyMonthFees: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type TPaymentDueInfo = {
  dueFees: TFees;
  extraFees: TFees;
  totalDue: number;
  totalExtraFees: number;
};


export type TPaymentHistory = {
  _id: string;
  student: Partial<TStudent>;
  class: TClass;
  receivedBy:TUser;
  studentPayment: string;
  year: number;
  date: Date;
  admissionFees: number;
  reAdmissionFees: number;
  yearlyMonthFees: number;
  books: number;
  picnicFees: number;
  idCard: number;
  examFees: number;
  stationeries: number;
  studyTour: number;
  tie: number;
  discountOnFees: number;
  cashCollection: number;
};

export type TAcademicPayment = {
  class: string;
  year: number;
  createdBy: string;
  // fees
  yearlyMonthFees: number;
  yearlyAccFees: number;
  admissionFees: number;
  reAdmissionFees: number;
  books: number;
  stationeries: number;
  idCard: number;
  tie: number;
  studyTour: number;
  examFees: number;
  picnicFees: number;
};

// new start here

const paymentKeys = [
  "yearlyMonthFees",
  "admissionFees",
  "reAdmissionFees",
  "books",
  "stationeries",
  "idCard",
  "tie",
  "studyTour",
  "examFees",
  "picnicFees",
] as const;

type ValidName = (typeof paymentValidNames)[number];
type PayKeysValidName = (typeof  paymentKeys)[number];

export interface PaymentField {
  label: string;
  id: PayKeysValidName;
  name: ValidName;
  placeholder: string;
}
