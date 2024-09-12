"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import FormHeadingContent from "../FormHeadingContent";
import { toast } from "sonner";
import {
  useGetStudentByStudentIdQuery,
  useUpdateStudentDataMutation,
} from "@/redux/features/student/createStudentApi";
import { useGetAllClassQuery } from "@/redux/features/class/createClasApi";
import { useRouter } from "next/navigation";
import { UpdateStudentFormSchema } from "@/lib/zod/updateStudentFormSchema";
import { TResponse } from "@/types/global";
import { Loader2 } from "lucide-react";
import { APP_ROUTES } from "@/lib/utils";

export default function UpdateStudentForm({
  studentId,
}: {
  studentId: string;
}) {
  const { data: singleStudent, error: singleStudentError } =
    useGetStudentByStudentIdQuery(studentId);

  const router = useRouter();

  const { data: allClass, error } = useGetAllClassQuery(undefined);
  const [updateStudentData, { isLoading, isError }] =
    useUpdateStudentDataMutation();
  const fieldGroupClasses =
    "grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5";
  const form = useForm<z.infer<typeof UpdateStudentFormSchema>>({
    resolver: zodResolver(UpdateStudentFormSchema),
  });

  async function onSubmit(data: z.infer<typeof UpdateStudentFormSchema>) {
    try {
      const toastId = toast.loading("Updating data...");
      const res = (await updateStudentData({
        studentId: singleStudent.data._id,
        updatedData: data,
      })) as TResponse;

      if (isError) {
        return toast.error(
          (res?.error?.data.message as string) || "Please try again",
          { id: toastId }
        );
      }
      toast.success("Student updated successfully", { id: toastId });
      router.push(`/${APP_ROUTES.ALL_STUDENT}/${studentId}`);
    } catch (err: any) {
      toast.error(err.message as string | "Sorry,please try again");

    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="full space-y-6">
        <div className={fieldGroupClasses}>
          <FormField
            control={form.control}
            name="studentName"
            defaultValue={singleStudent?.data?.studentName}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student Name</FormLabel>

                <FormControl>
                  <Input
                    placeholder={singleStudent?.data?.studentName}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Class</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={singleStudent?.data?.class.name || field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          singleStudent?.data?.class.name
                            ? singleStudent?.data?.class.name
                            : "Select a class"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {allClass?.data.map(
                      (classItem: { _id: string; name: string }) => (
                        <SelectItem key={classItem._id} value={classItem._id}>
                          {classItem.name}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          singleStudent?.data?.gender
                            ? singleStudent?.data?.gender
                            : "Gender"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DATE PICKER FIELD START */}

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>

                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* DATE PICKER FIELD END */}

          <FormField
            control={form.control}
            name="religion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Religion</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.religion
                        ? singleStudent?.data?.religion
                        : "Riligion"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="placeOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Place of Birth</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.placeOfBirth
                        ? singleStudent?.data?.placeOfBirth
                        : "Place of birth"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.nationality
                        ? singleStudent?.data?.nationality
                        : "Country"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Language</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.firstLanguage
                        ? singleStudent?.data?.firstLanguage
                        : "First Language"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="presentAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Present Address</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.presentAddress
                        ? singleStudent?.data?.presentAddress
                        : "Present address"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="permanentAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Permanent address</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.permanentAddress
                        ? singleStudent?.data?.permanentAddress
                        : "Permanent Address"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormHeadingContent title="Father's Information" />

        <div className={fieldGroupClasses}>
          <FormField
            control={form.control}
            name="fatherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"Name"}</FormLabel>

                <FormControl>
                  <Input
                    id="fatherName"
                    placeholder={
                      singleStudent?.data?.fatherName
                        ? singleStudent?.data?.fatherName
                        : "Father's Name"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fatherEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"Email"}</FormLabel>
                <FormControl>
                  <Input
                    id="fatherEmail"
                    placeholder={
                      singleStudent?.data?.fatherEmail
                        ? singleStudent?.data?.fatherEmail
                        : "Father's email address"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fatherPhonNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={
                      singleStudent?.data?.fatherPhonNumber
                        ? singleStudent?.data?.fatherPhonNumber
                        : "Mobile number..."
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fatherIDCardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={
                      singleStudent?.data?.fatherIDCardNumber
                        ? singleStudent?.data?.fatherIDCardNumber
                        : "ID number..."
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fatherProfession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.fatherProfession
                        ? singleStudent?.data?.fatherProfession
                        : "Profession"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fatherPesignation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pesignation</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.fatherPesignation
                        ? singleStudent?.data?.fatherPesignation
                        : "Pesignation"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormHeadingContent title="Mother's Information" />

        <div className={fieldGroupClasses}>
          <FormField
            control={form.control}
            name="motherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"Name"}</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.motherName
                        ? singleStudent?.data?.motherName
                        : "Mother's Name"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="motherEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"Email"}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.motherEmail
                        ? singleStudent?.data?.motherEmail
                        : "Mother's email address"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="motherPhonNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={
                      singleStudent?.data?.motherPhonNumber
                        ? singleStudent?.data?.motherPhonNumber
                        : "Mobile number..."
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="motherIDCardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={
                      singleStudent?.data?.motherIDCardNumber
                        ? singleStudent?.data?.motherIDCardNumber
                        : "ID number..."
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="motherProfession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.motherProfession
                        ? singleStudent?.data?.motherProfession
                        : "Profession"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motherPesignation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pesignation</FormLabel>

                <FormControl>
                  <Input
                    placeholder={
                      singleStudent?.data?.motherPesignation
                        ? singleStudent?.data?.motherPesignation
                        : "Pesignation"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-row-reverse">
          <div className="">
            {isLoading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="mr-auto" type="submit">
                Update
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
