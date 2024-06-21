import HistoryDish from "@/components/common/HistoryDish";
import CountingBox from "@/components/dashboard/CountingBox";
import DashboardSideActionsBar from "@/components/dashboard/DashboardSideActionsBar";
import PaymentHistoryArea from "@/components/dashboard/PaymentHistoryArea";
import StdTable from "@/components/dashboard/StdTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  CreditCard,
  DollarSign,
  EllipsisVertical,
  GraduationCap,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const countingArr = [
    {
      title: "Total Students",
      icon: "GraduationCap",
      number: "students",
      id: 1,
    },
    { title: "Total Payment", icon: "GraduationCap", number: "payment", id: 3 },
    {
      title: "Total Collection",
      icon: "GraduationCap",
      number: "collection",
      id: 2,
    },
    {
      title: "Total Remaining",
      icon: "GraduationCap",
      number: "remaining",
      id: 3,
    },
  ];
  return (
    <>
      <div className="flex gap-6">
        <div className="space-y-6 w-full">
          {/* counting ... */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {countingArr.map((item) => (
              <CountingBox key={item.id} item={item} />
            ))}
          </div>
          <HistoryDish />
        </div>
        <DashboardSideActionsBar/>
      </div>
    </>
  );
};

export default Dashboard;
