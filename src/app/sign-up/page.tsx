import LoginForm from "@/components/login/LoginForm";
import SignUpForm from "@/components/sign-up/SignUpForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SingUp = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SingUp;
