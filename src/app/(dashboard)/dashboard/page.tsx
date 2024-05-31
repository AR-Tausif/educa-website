import CountingBox from "@/components/dashboard/CountingBox";
import PaymentHistoryArea from "@/components/dashboard/PaymentHistoryArea";
import StdTable from "@/components/dashboard/StdTable";
import { EllipsisVertical, GraduationCap } from "lucide-react";

const Dashboard = () => {
  const countingArr = [
    { title: "Total Students", icon: GraduationCap, number: 3320, id: 1 },
    { title: "Total Instructors", icon: GraduationCap, number: 3320, id: 2 },
    { title: "Total Payment", icon: GraduationCap, number: 3320, id: 3 },
  ];
  return (
    <>
      <div className="flex gap-6">
        <div className="space-y-6 w-full">
          {/* counting ... */}
          <div className="flex gap-4">
            {countingArr.map((item) => (
              <CountingBox key={item.id} item={item} />
            ))}
          </div>

          {/* counting ... */}
          <PaymentHistoryArea/>
          <div className="space-y-3 border p-4 rounded-md">
            {/* attendance div */}

            <StdTable/>
          </div>
        </div>
        <div className="w-[50%] space-y-6">
          <div className="border p-4 rounded-md space-y-4">
            <p className="font-semibold">Toaday Class Schedule</p>
            <div className="box flex justify-between items-center border p-3 rounded-md hover:bg-muted">
              <div className="">
                <p className="text-sm">Physics</p>
                <p className="text-xs text-gray-400">
                  chapter 9 = Time 09:10-10:10 pm
                </p>
              </div>
              <EllipsisVertical />
            </div>
            <div className="box flex justify-between items-center border p-3 rounded-md hover:bg-muted">
              <div className="">
                <p className="text-sm">Physics</p>
                <p className="text-xs text-gray-400">
                  chapter 9 = Time 09:10-10:10 pm
                </p>
              </div>
              <EllipsisVertical />
            </div>
            <div className="box flex justify-between items-center border p-3 rounded-md hover:bg-muted">
              <div className="">
                <p className="text-sm">Physics</p>
                <p className="text-xs text-gray-400">
                  chapter 9 = Time 09:10-10:10 pm
                </p>
              </div>
              <EllipsisVertical />
            </div>
          </div>
          <div className="flex justify-between items-center border p-4 rounded-md">
            <div className="pie-chart mx-auto">
              <div className="slice slice-1"></div>
              <div className="slice slice-2"></div>
              <div className="slice slice-3"></div>
              <div className="slice slice-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
