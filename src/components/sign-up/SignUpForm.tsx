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
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function SignUpForm() {
  const [register, { data, error, isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();   
   const router = useRouter();

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

    const toastId = toast.loading("Please wait for moments")
    try {
      const loginResponse:any= await register(userInfo).unwrap();
 
    //   const user = VerifyToken(loginResponse.data.accessToken);
    //   dispatch(setUser({ user, token: loginResponse.data.accessToken }));      
      router.push("/login");
      toast.success(loginResponse.message,{id:toastId})
      
    } catch (error) {

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
        {isLoading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        )}
      </form>
      <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href={`/${APP_ROUTES.LOGIN}`} className="underline">
            Login
          </Link>
        </div>
    </Form>
  );
}
