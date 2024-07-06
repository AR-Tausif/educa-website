import PaymentBarChart from "@/components/dashboard/BarChart";
import CountingBox from "@/components/dashboard/CountingBox";
import DashboardSideActionsBar from "@/components/dashboard/DashboardSideActionsBar";
import StudentGenderPieChart from "@/components/dashboard/StudentGenderPieChart";
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
      <div className="gap-6">
        <div className="space-y-6 w-full">
          {/* counting ... */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {countingArr.map((item) => (
              <CountingBox key={item.id} item={item} />
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <PaymentBarChart />
              <StudentGenderPieChart />
            </div>
            <DashboardSideActionsBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
