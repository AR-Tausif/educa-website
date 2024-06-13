"use client";

import { useGetAllPaymentHistoryQuery } from "@/redux/features/payment-history/paymentHistoryApi";
import { Badge } from "../ui/badge";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { TPaymentHistory } from "@/types/payment.type";

export default function HistoryDishTableBody() {
  const { data, isLoading, isFetching } =
    useGetAllPaymentHistoryQuery(undefined);
  if (isFetching) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }
  return (
    <TableBody>
      {data?.data?.slice(0,6).map((item: TPaymentHistory, index: number) => (
        <TableRow key={index}>
          <TableCell>
            <div className="font-medium">{item?.student?.studentName}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {item?.student?.fatherEmail || ""}
            </div>
          </TableCell>
          <TableCell className="hidden xl:table-column">Sale</TableCell>
          <TableCell className="hidden xl:table-column">
            <Badge className="text-xs" variant="outline">
              Approved
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
            2023-06-23
          </TableCell>
          <TableCell className="text-right">{item?.cashCollection} Tk</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
