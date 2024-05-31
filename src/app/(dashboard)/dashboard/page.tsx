import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { APP_ROUTES } from "@/lib/utils";
import { EllipsisVertical, GraduationCap } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      {/* <div className="p-10 h-screen">
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
      </div> */}

      <div className="flex gap-6">
        <div className="space-y-6 w-full">
          {/* counting ... */}
          <div className="flex gap-4">
            {/* box-1 */}
            <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
              <GraduationCap />
              <div className="pr-6 space-y-1">
                <p className="text-base">Total Student</p>
                <p className="text-xs text-gray-400">3320</p>
              </div>
            </div>
            {/* box-2 */}
            <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
              <GraduationCap />
              <div className="pr-6 space-y-1">
                <p className="text-base">Total Instructors</p>
                <p className="text-xs text-gray-400">3320</p>
              </div>
            </div>
            {/* box-3 */}
            <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
              <GraduationCap />
              <div className="pr-6 space-y-1">
                <p className="text-base">Total Payment</p>
                <p className="text-xs text-gray-400">3320</p>
              </div>
            </div>
          </div>

          {/* counting ... */}
          <div className="space-y-3 border p-4 rounded-md">
            {/* attendance div */}
            <div className="flex justify-between">
              <p className="text-2xl font-semibold">Attendance</p>
              <div className="flex">
                <p className="bg-blue-50 px-2">Last 6 months</p>
                <p className="bg-blue-50 px-2">Class 10</p>
              </div>
            </div>

            {/* attendance div */}
            <div className="space-x-3 flex">
              <div className="space-x-2">
                <Checkbox /> <span className="text-sm"> Present</span>
              </div>
              <div className="space-x-2">
                <Checkbox /> <span className="text-sm"> Absent</span>
              </div>
            </div>
          </div>
          <div className="space-y-3 border p-4 rounded-md">
            {/* attendance div */}

            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Date of Birth
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Role
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Salary
                    </th>
                  </tr>
                </thead>

                <tbody className=" divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      John Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Web Developer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $120,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Jane Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      04/11/1980
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Web Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $100,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
