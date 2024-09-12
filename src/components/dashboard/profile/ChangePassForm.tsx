"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useChangePasswordMutation } from "@/redux/features/auth/authApi"
import { TResponse } from "@/types/global"
import { toast } from "sonner"
import { Loader } from "lucide-react"

const formSchema = z.object({
  currentPassword: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
  newPassword: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function ChangePassForm() {
   // 1. Define your redux mutation methods.
   const [changePassword, {isLoading}] = useChangePasswordMutation()
   // 2. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const res = await changePassword({
        currentPassword: values.currentPassword,
        newPassword:values.newPassword
      }) as TResponse

      if(res?.error){
        toast.error(res.error.data.message || "something went wrong")
        } else{
        toast.success(res?.data?.data.message || "password changed")
      }
    } catch (error) {
      toast.error("Something wrong")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="new password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="confirm password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
      {isLoading ? <Button disabled>
        Please wait <Loader className="animate-spin"/>
      </Button>  : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  )
}
