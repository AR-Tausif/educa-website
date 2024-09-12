"use client";

import Link from "next/link";
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
import { CreateStudentFormSchema } from "@/lib/zod/createStudentFormSchema";
import FormHeadingContent from "../FormHeadingContent";
import { toast } from "sonner";
import { useCreateStudentMutation } from "@/redux/features/student/createStudentApi";
import { useGetAllClassQuery } from "@/redux/features/class/createClasApi";
import { useRouter } from "next/navigation";
import { TResponse } from "@/types/global";
import { APP_ROUTES } from "@/lib/utils";
import { Loader } from "lucide-react";

export function AddStudentForm() {
  const router = useRouter();
  const [createStudent, { isLoading: createStudentLoading }] =
    useCreateStudentMutation();
  const { data: allClass, error } = useGetAllClassQuery(undefined);
  const fieldGroupClasses =
    "grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5";
  const form = useForm<z.infer<typeof CreateStudentFormSchema>>({
    resolver: zodResolver(CreateStudentFormSchema),
  });

  async function onSubmit(data: z.infer<typeof CreateStudentFormSchema>) {

    try {
      const res = (await createStudent(data)) as TResponse;

      if (res.error) {
        return toast.error(res.error.data.message as string);
      }
      toast.success("Student created successfully");
      router.push(`/${APP_ROUTES.ALL_STUDENT}`);
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student Name</FormLabel>

                <FormControl>
                  <Input placeholder="Student Full Name" {...field} />
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
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a class" />
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
                      <SelectValue placeholder="Gender" />
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
                  <Input type="date" placeholder="MM | DD | YYYY" {...field} />
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
                  <Input placeholder="Riligion" {...field} />
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
                  <Input placeholder="Place of birth" {...field} />
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
                    defaultValue={"bangladesh"}
                    placeholder="Country"
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
                  <Input placeholder="First Language" {...field} />
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
                  <Input placeholder="Present address" {...field} />
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
                  <Input placeholder="Permanent Address" {...field} />
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
                  <Input placeholder="Father's Name" {...field} />
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
                  <Input placeholder="Father's email address" {...field} />
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
                    placeholder="Mobile number..."
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
                  <Input type="number" placeholder="ID number..." {...field} />
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
                  <Input placeholder="Profession" {...field} />
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
                  <Input placeholder="Pesignation" {...field} />
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
                  <Input placeholder="Mother's Name" {...field} />
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
                  <Input placeholder="Mother's email address" {...field} />
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
                    placeholder="Mobile number..."
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
                  <Input type="number" placeholder="ID number..." {...field} />
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
                  <Input placeholder="Profession" {...field} />
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
                  <Input placeholder="Pesignation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-row-reverse">
          <div className="">
            {createStudentLoading ? (
              <Button type="button" disabled className="">
                <span className="pr-2">Creating Student </span>{" "}
                <Loader className="animate-spin" />
              </Button>
            ) : (
              <Button className="mr-auto" type="submit">
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}