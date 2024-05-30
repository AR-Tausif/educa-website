import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/utils";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="p-10 h-screen">
        <SectionTitle title="DashBoard" />
        <div className="flex justify-end items-end mb-5">
          <Link href={`/${APP_ROUTES.CREATE_STUDENT}`}>
            <Button className="animate-pulse bg-blue-600 hover:bg-blue-600 rounded-2xl text-xl text-white">
              Add Students
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 text-center gap-16 ">
          <div className="bg-blue-500 font-semibold text-2xl text-white rounded-full p-4">
            <Link href={`/${APP_ROUTES.CLASS_STUDENT}`}>
              <h1>Total Student</h1>
              <p className="animate-pulse text-black font-bold text-4xl">520</p>
            </Link>
          </div>

          <div className="bg-red-500 font-semibold text-2xl text-white rounded-full p-4">
            <h1>Total Remaining</h1>
            <p className="animate-pulse text-white font-bold text-4xl">5000</p>
          </div>

          <div className="bg-green-600 font-semibold text-2xl text-white rounded-full p-4">
            <h1>Total Collection</h1>
            <p className="animate-pulse text-white font-bold text-4xl">27000</p>
          </div>

          <div className="bg-blue-500 font-semibold text-2xl text-white rounded-full p-4">
            <Link href={`/${APP_ROUTES.ALL_PAYMENT_HISTORY}`}>
              <h1>All Payment History</h1>
              <p className="animate-pulse text-black font-bold text-4xl">520</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 font-semibold text-2xl text-white rounded-full p-4">
          <Link href={`/${APP_ROUTES.CLASS_STUDENT}`}>
            <Button>Payment Now</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
