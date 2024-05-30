"use client";

import { Label } from "../ui/label";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUserFormSchema } from "@/lib/zod/loginUserFormSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLoginMutation, useRegisterMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";
import { VerifyToken } from "@/lib/VerifyToken";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/lib/utils";
import { toast } from "sonner";
import { SignUpUserFormSchema } from "@/lib/zod/signUpUserFormSchema";

export default function SignUpForm() {
  const [register, { data, error }] = useRegisterMutation();
  const dispatch = useDispatch();   
   const router = useRouter();

  console.log("Login data: ==>", data);
  console.log("Login error: ==>", error);
  const form = useForm<z.infer<typeof SignUpUserFormSchema>>({
    resolver: zodResolver(SignUpUserFormSchema),
  });

  async function onSubmit(data: z.infer<typeof SignUpUserFormSchema>) {
    const userInfo = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      phoneNumber: parseInt(data.phoneNumber),
    };
    console.log(userInfo)
    const toastId = toast.loading("Please wait for moments")
    try {
      const loginResponse:any= await register(userInfo).unwrap();
      console.log(loginResponse);
    //   const user = VerifyToken(loginResponse.data.accessToken);
    //   dispatch(setUser({ user, token: loginResponse.data.accessToken }));      
      router.push("/login");
      toast.success(loginResponse.message,{id:toastId})
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!", {id:toastId})
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="full space-y-6">
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email">Full Name</Label>

                <FormControl>
                  <Input type="text" placeholder="Type your full name.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="phoneNumber">Mobile Number</Label>

                <FormControl>
                  <Input type="number" placeholder="ex: +880 1XXX XXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email">Email</Label>

                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email">Password</Label>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="Type your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
}
