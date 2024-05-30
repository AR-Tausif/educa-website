import Link from "next/link";
import { Button } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Bell,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";

const SideNavigationBar = () => {
  const routes = [
    {
      path: "/dashboard",
      icon: Package2,
      title: "Dashboard",
    },
    {
      path: "/dashboard/all-class",
      icon: ShoppingCart,
      title: "All Class",
    },
    {
      path: "/dashboard/all-students",
      icon: Package,
      title: "All Student",
    },
    {
      path: "/dashboard/users",
      icon: Users,
      title: "Users",
    },
    // =======
    {
      path: "/dashboard/all-payment-history",
      icon: Users,
      title: "Payment History",
    },
    {
      path: "/dashboard/add-student",
      icon: Users,
      title: "Add Student",
    },
    {
      path: "/dashboard/class-student",
      icon: Users,
      title: "Class Student",
    },
  ];
  return (
    <div className="flex relative h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">EDUCA</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-xl font-medium lg:px-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="flex items-center gap-2 bg-blue-500 mt-6 text-white font-bold text-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <route.icon className="h-4 w-4" />
              <p>{route.title}</p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideNavigationBar;
