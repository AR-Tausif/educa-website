import HistoryDish from "@/components/common/HistoryDish";
import CountingBox from "@/components/dashboard/CountingBox";
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

          {/* counting ... */}
          {/* <PaymentHistoryArea /> */}
          <HistoryDish />
        </div>
        <div className="w-[50%] space-y-6">
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Added</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium"></div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium"></div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium"></div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium"></div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium"></div>
              </div>
            </CardContent>
          </Card>
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
