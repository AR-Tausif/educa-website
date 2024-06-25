"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  paymentDefaultVaues,
  paymentFields,
  paymentValidNames,
} from "@/constant/payment";
import { StudentPaymentFormSchema } from "@/lib/zod/studentPaymentFormSchema";
import UpdatePaymentMutation from "@/helper/studentPayment.mutation";
import { useUpdateStudentPaymentByClassIdAndStudentIdMutation } from "@/redux/features/student-payment/studentPaymentApi";
import { showToastWithFormData } from "@/lib/ShowToast";
import { ChevronRight, Loader, Loader2 } from "lucide-react";
import {
  PaymentField,
  TAcademicPayment,
  TPaymentDueInfo,
} from "@/types/payment.type";
import { Separator } from "../ui/separator";
import FormHeadingContent from "../FormHeadingContent";
import { TStudent } from "@/types/student";
import { APP_ROUTES } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AppRouter from "next/dist/client/components/app-router";
import PaymentFieldBox from "../common/PaymentFieldBox";

type TPaymentFormProps = {
  student: TStudent;
  stdPayDueData: TPaymentDueInfo;
  academicSinglePaymentData: TAcademicPayment;
};
export default function PaymentForm({
  student,
  academicSinglePaymentData,
  stdPayDueData,
}: TPaymentFormProps) {
  const [
    updateStudentByClassIdAndStudentId,
    { isLoading: updatePaymentLoading },
  ] = useUpdateStudentPaymentByClassIdAndStudentIdMutation();

  const form = useForm<z.infer<typeof StudentPaymentFormSchema>>({
    resolver: zodResolver(StudentPaymentFormSchema),
    defaultValues: paymentDefaultVaues,
  });

  const router = useRouter();

  // Watch all the fields
  const formValues = form.watch();

  // Calculate the total sum
  const totalPayInputSum = paymentValidNames.reduce((sum, key) => {
    return sum + (Number(formValues[key]) || 0);
  }, 0);

  const paymentFields: PaymentField[] = [
    {
      label: "Monthly Fees",
      id: "yearlyMonthFees",
      name: "monthly",
      placeholder: `${academicSinglePaymentData?.yearlyMonthFees}`,
    },
    {
      label: "Admission Fees",
      id: "admissionFees",
      name: "admission",
      placeholder: `${academicSinglePaymentData?.admissionFees}`,
    },
    {
      label: "Readmission Fees",
      id: "reAdmissionFees",
      name: "readmission",
      placeholder: `${academicSinglePaymentData?.reAdmissionFees}`,
    },
    {
      label: "Picnic",
      id: "picnicFees",
      name: "picnic",
      placeholder: `${academicSinglePaymentData?.picnicFees}`,
    },
    {
      label: "Exam Fees",
      id: "examFees",
      name: "exam",
      placeholder: `${academicSinglePaymentData?.examFees}`,
    },
    {
      label: "Study Tour",
      id: "studyTour",
      name: "studyTour",
      placeholder: `${academicSinglePaymentData?.studyTour}`,
    },
    {
      label: "Books",
      id: "books",
      name: "books",
      placeholder: `${academicSinglePaymentData?.books}`,
    },
    {
      label: "ID Card",
      id: "idCard",
      name: "idCard",
      placeholder: `${academicSinglePaymentData?.idCard}`,
    },
    {
      label: "Stationeries",
      id: "stationeries",
      name: "stationeries",
      placeholder: `${academicSinglePaymentData?.stationeries}`,
    },
    {
      label: "Tie",
      id: "tie",
      name: "tie",
      placeholder: `${academicSinglePaymentData?.tie}`,
    },
    // {
    //   label: "Others",
    //   id: "others",
    //   name: "others",
    //   placeholder: `${academicSinglePaymentData?.tie}`,
    // },

    // Add more fields as needed
  ];

  const collectionManageFields = [
    {
      id: 1,
      name: "total_due",
      title: "Total Due Fees",
      amount: stdPayDueData?.totalDue,
    },
    {
      id: 2,
      name: "current_amount",
      title: "Current Amount",
      amount: totalPayInputSum,
    },
    {
      id: 3,
      name: "sub_total",
      title: "Sub-total",
      amount: stdPayDueData?.totalDue + totalPayInputSum,
    },
    {
      id: 4,
      name: "cash_collection",
      title: "Cash Collection",
      amount: totalPayInputSum,
      // amount: formValues?.cashCollection,
    },
  ];

  async function onSubmit(data: z.infer<typeof StudentPaymentFormSchema>) {
    console.log("onsubmit", data);
    const updatedData = {
      monthly: Number(data.monthly) | 0,
      admission: Number(data.admission) | 0,
      readmission: Number(data.readmission) | 0,
      picnic: Number(data.picnic) | 0,
      exam: Number(data.exam) | 0,
      studyTour: Number(data.studyTour) | 0,
      books: Number(data.books) | 0,
      idCard: Number(data.idCard) | 0,
      stationeries: Number(data.stationeries) | 0,
      tie: Number(data.tie) | 0,
      discountOnFees: Number(data.discountOnFees),
      others: Number(data.others) | 0,
      cashCollection: totalPayInputSum | 0, // here took cashCollection with immutablly
    };
    showToastWithFormData(updatedData);
    await UpdatePaymentMutation(
      updateStudentByClassIdAndStudentId,
      updatedData,
      { classId: student.class._id, studentId: student._id }
    );
    router.push(`/${APP_ROUTES.ALL_STUDENT}/${student._id}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 pb-5"
      >
        <div className="grid grid-cols-2 gap-3 p-5">
          {paymentFields.map((itemField: PaymentField, index: number) => (
            <div
              key={itemField.id}
              className={`flex gap-x-7 transition-all rounded-md hover:bg-muted border-2 p-4 ${
                [0, 1, 4, 5, 8, 9].includes(index) ? "backdrop-blur-sm" : " s"
              }`}
            >
              <div className="flex items-center gap-x-4">
                <div className="self-end mb-2">
                  <Button
                    type="button"
                    className="rounded-full bg-gray-700 w-7 h-7"
                    size="sm"
                  >
                    <p className="text-white text-xs">{index + 1}</p>
                  </Button>
                </div>
                <div>
                  <FormField
                    key={itemField.label}
                    control={form.control}
                    name={itemField.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{itemField.label}</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder={itemField.placeholder}
                            className="font-semibold text-green-600"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              form.setValue(itemField.name, e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="">
                <FormField
                  key={itemField.label}
                  control={form.control}
                  name={itemField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due</FormLabel>
                      <FormControl>
                        <Input
                          value={
                            itemField.id === "yearlyMonthFees"
                              ? stdPayDueData?.dueFees.monthlyFees
                              : stdPayDueData?.dueFees[itemField.id] || 0
                          }
                          disabled
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}

          <PaymentFieldBox form={form} />
        </div>

        <div className="">
          <FormHeadingContent
            className="text-center"
            title="Total amounts"
            desc="Here listed all total amount and also calculating"
          />
          <Separator className="mt-3" />

          <div className="grid grid-cols-2 gap-3 divide-x-2 px-5 pt-5">
            {collectionManageFields.map((item) => (
              <div
                key={item.id}
                className="flex gap-x-7 border backdrop-blur-xl justify-between shadow-sm transition-all rounded-md bg-muted p-4 px-16"
              >
                <div className="flex items-center gap-x-4">
                  <div className="">
                    <Button
                      type="button"
                      className="rounded-full bg-gray-700 w-7 h-7"
                      size="sm"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                  <div>
                    <p>{item.title} </p>
                  </div>
                </div>
                <div className="">
                  {/* if collection need to checking */}
                  <div className="">
                    {item.name === "cash_collection" ? (
                      <FormField
                        key={item.name}
                        control={form.control}
                        name="cashCollection"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled
                                placeholder="cash"
                                {...field}
                                value={item.amount}
                                defaultValue={item.amount}
                                onChange={(e) => {
                                  field.onChange(e);
                                  form.setValue(
                                    "cashCollection",
                                    e.target.value
                                  );
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <FormField
                        key="itemField.label"
                        name="itemField.name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input value={item.amount} disabled />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                  {/* <FormField
                      key="itemField.label"
                      name="itemField.name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="font-bold disabled:text-gray-900" value={item.amount} disabled />
                          </FormControl>
                        </FormItem>
                      )}
                    /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          {updatePaymentLoading ? (
            <Button type="button" disabled className="w-[20%]">
              <span className="pr-2">Please wait </span>{" "}
              <Loader className="animate-spin" />
            </Button>
          ) : totalPayInputSum <= 0 ? (
            <Button disabled className="w-[20%]">
              Submit
            </Button>
          ) : (
            <Button type="submit" className="w-[20%]">
              Submit
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
