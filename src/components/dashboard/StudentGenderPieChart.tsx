'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";


export default function StudentGenderPieChart() {
  return (
    <Card className="w-full max-w-sm sm:mx-auto md:mx-auto">
      <CardHeader className="pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>
          A basic pie chart showing the percentage of students gender.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <PiechartcustomChart />
      </CardContent>
      {/* <Separator /> */}
      <CardFooter className="justify-between py-2 border-t">
        <div className="px-2 flex items-center gap-2">
          <div className="w-1 h-7  rounded-sm bg-[#7439E8]"></div>
          <div className="">
            <p className="text-[#868E9D] text-sm">Male</p>
            <p className="font-semibold">50%</p>
          </div>
        </div>
        <div className="p-2 flex items-center gap-2">
          <div className="w-1 h-7  rounded-sm bg-[#FE784A]"></div>
          <div className="">
            <p className="text-[#868E9D] text-sm">Female</p>
            <p className="font-semibold">50%</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function PiechartcustomChart() {
  return (
    <div>
      <ChartContainer
        config={{
          Male: {
            label: "Male",
            color: "#7439E8",
          },
          Female: {
            label: "Female",
            color: "#FE784A",
          },
        }}
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={[
              { browser: "Male", visitors: 60, fill: "#7439E8" },
              { browser: "Female", visitors: 40, fill: "#FE784A" },
            ]}
            // cx="40%"
            // cy="50%"
            innerRadius={40}
            outerRadius={85}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
