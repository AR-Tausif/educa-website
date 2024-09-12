"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { BadgeEuro, Loader, Loader2Icon } from "lucide-react"
import { toast } from "sonner"
import { TResponse } from "@/types/global"
import { TCreateClass, useCreateClassMutation, useEditClassMutation } from "@/redux/features/class/createClasApi"

const updateFormSchema = z.object({
    className: z.string().optional(),
    year: z.string().optional(),
    yearlyMonthFees: z.string().optional(),
    // yearlyAccFees: z.string().optional(),
    admissionFees: z.string().optional(),
    reAdmissionFees: z.string().optional(),
    books: z.string().optional(),
    stationeries: z.string().optional(),
    idCard: z.string().optional(),
    tie: z.string().optional(),
    studyTour: z.string().optional(),
    examFees: z.string().optional(),
    picnicFees: z.string().optional(),
})

type FormFieldName = keyof z.infer<typeof updateFormSchema>;
export function UpdateAcademicPaymentForm({classId}:{classId: string}) {
    const [editClass,{isLoading}] = useEditClassMutation();
    // const { data: academicSinglePaymentData, error, } = useGetSingleAcademicPaymentByClassIdQuery({ classId: singleStudentData?.data?.class?._id })
    // 1. Define your form.
    const form = useForm<z.infer<typeof updateFormSchema>>({
        resolver: zodResolver(updateFormSchema),
        defaultValues: {
            className: "",
            year: "",
            yearlyMonthFees: "",
            // yearlyAccFees: "",
            admissionFees: "",
            reAdmissionFees: "",
            books: "",
            stationeries: "",
            idCard: "",
            tie: "",
            studyTour: "",
            examFees: "",
            picnicFees: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof updateFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const classInfo: TCreateClass = {
            className: values.className || "",
            fees: {
                year: Number(values.year) ,
                yearlyMonthFees: Number(values.yearlyMonthFees),
                // yearlyAccFees: Number(values.yearlyAccFees),
                admissionFees: Number(values.admissionFees),
                reAdmissionFees: Number(values.reAdmissionFees),
                books: Number(values.books),
                stationeries: Number(values.stationeries),
                idCard: Number(values.idCard),
                tie: Number(values.tie),
                studyTour: Number(values.studyTour),
                examFees: Number(values.examFees),
                picnicFees: Number(values.picnicFees),
            }
        };

      

        try {
            const res = await editClass({classId, classInfo}) as TResponse;
            if (!res.error) {
                toast.success(res.data?.data?.message || "Class created");
            } else {
                toast.error(res.error?.data?.message);
            }
        } catch (error : any) {
            toast.error(error?.message || "Sorry, please try again");
        }
    }

    const formFields: { name: FormFieldName; label: string; placeholder: string, nonIcon?: boolean }[] = [
        { name: "className", label: "Class Name", placeholder: "Enter class name", nonIcon: true },
        { name: "year", label: "Year", placeholder: "Enter year", nonIcon: true },
        { name: "yearlyMonthFees", label: "Yearly Monthly Fees", placeholder: "amount" },
        // { name: "yearlyAccFees", label: "Yearly Accommodation Fees", placeholder: "amount" },
        { name: "admissionFees", label: "Admission Fees", placeholder: "amount" },
        { name: "reAdmissionFees", label: "Readmission Fees", placeholder: "amount" },
        { name: "books", label: "Book Fees", placeholder: "amount" },
        { name: "stationeries", label: "Stationeries Fees", placeholder: "amount" },
        { name: "idCard", label: "ID Card Fees", placeholder: "amount" },
        { name: "tie", label: "Tie Fees", placeholder: "amount" },
        { name: "studyTour", label: "Study Tour Fees", placeholder: "amount" },
        { name: "examFees", label: "Exam Fees", placeholder: "amount" },
        { name: "picnicFees", label: "Picnic Fees", placeholder: "amount" },
    ];

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    {formFields.map((field) => (
                        <FormField
                            key={field.name}
                            control={form.control}
                            name={field.name}
                            render={({ field: controllerField }) => (

                                <FormItem>
                                    <FormLabel>{field.label}</FormLabel>
                                    <FormControl>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                                {field.nonIcon ? null : <BadgeEuro />}
                                            </span>
                                            <Input className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type={field.name === "className" ? "text" : "number"} placeholder={field.placeholder} {...controllerField} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
                {isLoading ? <Button disabled className="my-4 px-10 flex">
                <span className="pr-2">Please wait </span> <Loader className="animate-spin"/>
                    </Button> :<Button disabled className="my-4 px-10">Not availabe right now.</Button>}
            </form>
        </Form>


    );
}
