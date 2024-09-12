"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetStudentReportPaymentQuery } from "@/redux/features/reports/reportsPaymentApi";


const chartConfig = {
  desktop: {
    label: "Monthly Fees",
    color: "#60a5fa",
  },
  mobile: {
    label: "Others",
    color: "#cbd5e1",
  },
} satisfies ChartConfig;

export default function PaymentBarChart() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { data: stdReportPayment, isLoading } =
    useGetStudentReportPaymentQuery(undefined);

  if (isLoading) {
    <ChartContainer config={chartConfig} className="min-h-[50%] max-h-[50%] w-full">
      <h2>Loading...</h2>
    </ChartContainer>;
  }

  let chartData = monthNames.map((month) => ({
    month,
    monthlyFees: 0,
    others: 0,
  }));

  // Merge the API data with the initialized chartData
  stdReportPayment?.data.forEach(
    (d: { month: number; monthlyFees: number; others: number }) => {
      chartData[d.month].monthlyFees = d.monthlyFees;
      chartData[d.month].others = d.others;
    }
  );

  return (
    <div className="border w-full basis-3/4 p-4 rounded-lg">
      <p className="font-semibold text-[#0E3E1E]">Earnings This Year</p>
      <div className="flex gap-7">
        <div className="p-2 flex items-center gap-4">
          <div className="p-1 w-4 h-4 rounded-sm bg-[#60a5fa]"></div>
          <p className="text-sm text-[#868E9D]">Monthly Fees</p>
        </div>
        <div className="p-2 flex items-center gap-4">
          <div className="p-1 w-4 h-4 rounded-sm bg-[#cbd5e1]"></div>
          <p className="text-sm text-[#868E9D]">Others Fees</p>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="w-full h-full max-h-64">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="monthlyFees" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="others" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
