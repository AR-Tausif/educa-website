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
import { useGetFilterStudentGenderQuery } from "@/redux/features/reports/reportsPaymentApi";
import { Loader } from "lucide-react";
import { Pie, PieChart } from "recharts";
type TGenItem ={gender:string; percentage:number}

export default function StudentGenderPieChart() {
  const {data:filterData, isLoading} =useGetFilterStudentGenderQuery(undefined)
  
if(isLoading){
  return <div> Please wait <Loader className="animate-spin"/> </div>
}

  const genderArrData = filterData?.data.map((item:TGenItem)=> ({
    gender: item.gender,
    percentage: item.percentage,
    fill: item.gender === "Male" ?  "#FE784A": "#7439E8",
  }))
  const malePercentage = filterData?.data.find((item:TGenItem) => item.gender === "male")?.percentage;
  const femalePercentage = filterData?.data.find((item:TGenItem) => item.gender === "female")?.percentage;
  console.log({malePercentage, femalePercentage})
  return (
    <Card className="w-full max-w-sm sm:mx-auto md:mx-auto">
      <CardHeader className="pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>
          A basic pie chart showing the percentage of students gender.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <PiechartcustomChart genderArrData={genderArrData} />
      </CardContent>
      {/* <Separator /> */}
      <CardFooter className="justify-between py-2 border-t">
        <div className="px-2 flex items-center gap-2">
          <div className="w-1 h-7  rounded-sm bg-[#7439E8]"></div>
          <div className="">
            <p className="text-[#868E9D] text-sm">Male</p>
            <p className="font-semibold">{malePercentage || 0}%</p>
          </div>
        </div>
        <div className="p-2 flex items-center gap-2">
          <div className="w-1 h-7  rounded-sm bg-[#FE784A]"></div>
          <div className="">
            <p className="text-[#868E9D] text-sm">Female</p>
            <p className="font-semibold">{femalePercentage || 0}%</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function PiechartcustomChart({genderArrData}:{genderArrData : TGenItem[]}) {
  return (
    <div>
      <ChartContainer
        config={{
          male: {
            label: "Male",
            color: "#7439E8",
          },
          female: {
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
            data={genderArrData}
            // cx="40%"
            // cy="50%"
            innerRadius={40}
            outerRadius={85}
            dataKey="percentage"
            nameKey="gender"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
