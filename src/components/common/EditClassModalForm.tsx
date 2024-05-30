"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateClassMutation, useEditClassMutation } from "@/redux/features/class/createClasApi";
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
import { EditStudentFormSchema } from "@/lib/zod/editClassFormSchema";
import { TResponse } from "@/types/global";

const EditClassModalForm = ({classId}:{classId: string}) => {
    console.log(classId)
  const form = useForm<z.infer<typeof EditStudentFormSchema>>({
    resolver: zodResolver(EditStudentFormSchema),
  });

  const [editClass] = useEditClassMutation();
  

  async function onSubmit(data: z.infer<typeof EditStudentFormSchema>) {
    console.log(data);
    const classInfo = {
      name: data.name,
    };
   try {
    const res = await editClass({classId, classInfo}) as TResponse;
    if(res.error){
        toast.error("Sorry, please try again.")
    }else{
        toast.success("Class edited.")
    }
} catch (error) {
      toast.error("Sorry, please try again.")
     console.log(error)
   }
  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit Class</DialogTitle>
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
                    <Input placeholder="Enter Class Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};

export default EditClassModalForm;
