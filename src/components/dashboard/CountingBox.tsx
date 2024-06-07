"use client";
import { useGetCountingDocsQuery } from "@/redux/features/user/userApi";
import { GraduationCap, Loader, Loader2 } from "lucide-react";
import React, { ReactNode } from "react";

type TItem = {
  title: string;
  icon: string;
  number: "students"|"collection" | "remaining" | "payment";
  id: number;
};
type TProps = {
  item: any;
};
const CountingBox = ({ item }: TProps) => {
  const { data, isLoading } = useGetCountingDocsQuery(undefined);
  console.log("sdkfj", data);
  const { title, icon, number } = item;
  let desc: number = 0;

  if (isLoading) {
    <div className="flex justify-center items-center">
      <Loader className="animate-spin" />
    </div>;
  }

  if (number === "students") {
    desc = data?.data?.students;
  } else if (number === "collection") {
    desc = data?.data?.totalCollection;
  } else if (number === "remaining") {
    desc = data?.data?.remaining?.allTotalFees - data?.data?.totalCollection;
  }else if (number === "payment") {
    desc = data?.data?.paymentHistory;
  }
  return (
    <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
      <GraduationCap />
      <div className="pr-6 space-y-1">
        <p className="text-base">{title}</p>
        <p className="text-md text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default CountingBox;
