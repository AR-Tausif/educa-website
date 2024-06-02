"use client"
import { useGetCountingDocsQuery } from "@/redux/features/user/userApi";
import { GraduationCap, Loader2 } from "lucide-react";
import React, { ReactNode } from "react";

type TItem = {
  title: string;
  icon: ReactNode;
  number: number;
  id: number;
};
type TProps = {
  item: any;
};
const CountingBox = ({ item }: TProps) => {
  const {data, isLoading} =useGetCountingDocsQuery(undefined)
  console.log("sdkfj",data)
  const { title, icon, number } = item;
  let desc : string | number = "";

  if(isLoading){
    <p className="text-center font-semibold">Loading...</p>
  }

  if(number === "students"){
    desc = data?.data?.allStudents
  }
  return (
    <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
      <GraduationCap />
      <div className="pr-6 space-y-1">
        <p className="text-base">{title}</p>
        <p className="text-xs text-gray-400">{desc ? desc : <Loader2 className="mr-2 h-4 w-4 animate-spin" />}</p>
      </div>
    </div>
  );
};

export default CountingBox;
