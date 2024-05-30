"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div className="h-screen w-screen flex justify-center items-center">{isClient && <LottieAnimation />}</div>;
}

function LottieAnimation() {
  const { useLottie } = require("lottie-react");
  const animationLotti = require("../components/lottie/404.json");

  const options = {
    animationData: animationLotti,
    loop: true,
    
  };

  const { View } = useLottie(options);

  return (
    <div className="h-screen">
      <div>{View}</div>
      <div className="flex justify-center items-center mb-16 ">
        <Link href="/dashboard">
          <Button className=" bg-blue-500">
            <ArrowLeftIcon/>
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
