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
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";
import { VerifyToken } from "@/lib/VerifyToken";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/lib/utils";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Cookies from 'js-cookie';
import { TError } from "@/types/global";


export default function LoginForm() {
  const [login, { data, error, isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("Login data: ==>", data);
  console.log("Login error: ==>", error);
  const form = useForm<z.infer<typeof LoginUserFormSchema>>({
    resolver: zodResolver(LoginUserFormSchema),
  });

  async function onSubmit(data: z.infer<typeof LoginUserFormSchema>) {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const toastId = toast.loading("Please wait for moments");
    try {
      const loginResponse: any = await login(userInfo).unwrap();
      console.log(loginResponse);
      const user = VerifyToken(loginResponse.data.accessToken);
      dispatch(setUser({ user, token: loginResponse.data.accessToken }));
      toast.success(loginResponse.message, { id: toastId });
      Cookies.set('accessToken', loginResponse.data.accessToken);
      router.push("/dashboard");
    } catch (error:any) {
      console.log(error);
      toast.error(error?.data?.message || "Something went wrong!", { id: toastId });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="full space-y-6">
        <div className="grid gap-2">
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
            Sign in
          </Button>
        )}
      </form>
      <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href={`/${APP_ROUTES.REGISTER}`} className="underline">
            Sign up
          </Link>
        </div>
    </Form>
  );
}
