"use client";
import { useGetCountingDocsQuery } from "@/redux/features/user/userApi";
import { Activity, CreditCard, DollarSign, GraduationCap, Loader, Loader2, Users } from "lucide-react";
import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SkeletonCard from "../common/SkeletonCard";

type TItem = {
  title: string;
  icon: string;
  number: "students" | "collection" | "remaining" | "payment";
  id: number;
};
type TProps = {
  item: any;
};
const CountingBox = ({ item }: TProps) => {
  const { data, isLoading, isFetching } = useGetCountingDocsQuery(undefined);
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
  } else if (number === "payment") {
    desc = data?.data?.paymentHistory;
  }
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {number === "collection" && <DollarSign className="h-4 w-4 text-muted-foreground" />}
        {number === "students" && <Users className="h-4 w-4 text-muted-foreground" />}
        {number === "remaining" && <CreditCard className="h-4 w-4 text-muted-foreground" />}
        {number === "payment" && <Activity className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      {isFetching ? (
        <SkeletonCard />
      ) : (
        <CardContent>
          <div className="text-2xl font-bold">{desc} {number === "students" || number ==="payment" ? "": "Tk"}</div>
          {/* <p className="text-xs text-muted-foreground">+20.1% from last month</p> */}
        </CardContent>
      )}
    </Card>
  );
};

export default CountingBox;
