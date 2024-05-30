"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateStudentFormSchema } from "@/lib/zod/createClassFormSchema";
import { useCreateClassMutation } from "@/redux/features/class/createClasApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { toast } from "sonner";
import { TResponse } from "@/types/global";

const CreateClassModalForm = () => {
  const form = useForm<z.infer<typeof CreateStudentFormSchema>>({
    resolver: zodResolver(CreateStudentFormSchema),
  });

  const [createClass, { error, data }] = useCreateClassMutation();

  async function onSubmit(data: z.infer<typeof CreateStudentFormSchema>) {
    const classInfo = {
      name: data.name,
    };
    try {
      const res = await createClass(classInfo) as TResponse;

      if (!res.error) {
        toast.success("Class created");
      } else {
        toast.error(res.error?.data?.message);
      }
    } catch (error) {
      toast.error("Sorry, please try again or login again.");
    }
  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Class</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="full space-y-6"
          >
            {/* <FormHeadingContent title="Student Information"/> */}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter Your Class Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose>
                <Button type="submit">Create</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};

export default CreateClassModalForm;
