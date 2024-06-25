"use client";

import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { APP_ROUTES } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

const NavLinks = () => {
  const routes = [
    {
      path: "/dashboard",
      icon: Home,
      title: "Dashboard",
    },
    {
      path: `/${APP_ROUTES.ALL_CLASS}`,
      icon: ShoppingCart,
      title: "All Class",
    },
    {
      path: `/${APP_ROUTES.ALL_STUDENT}`,
      icon: Package,
      title: "All Student",
    },
    {
      path: `/${APP_ROUTES.ALL_USER}`,
      icon: Users,
      title: "Users",
    },
    // =======
    {
      path: `/${APP_ROUTES.ALL_PAYMENT_HISTORY}`,
      icon: Users,
      title: "Payment History",
    },
    {
      path: `/${APP_ROUTES.CREATE_STUDENT}`,
      icon: Users,
      title: "Add Student",
    },
    {
      path: `/${APP_ROUTES.CLASS_STUDENT}`,
      icon: LineChart,
      title: "Class Student",
    },
  ];
  const adminRoutes = [
    {
      path: "/dashboard",
      icon: Home,
      title: "Dashboard",
    },
    {
      path: `/${APP_ROUTES.ALL_STUDENT}`,
      icon: Package,
      title: "All Student",
    },
    {
      path: `/${APP_ROUTES.ALL_PAYMENT_HISTORY}`,
      icon: Users,
      title: "Payment History",
    },
    {
      path: `/${APP_ROUTES.CLASS_STUDENT}`,
      icon: LineChart,
      title: "Class Student",
    },
  ];

  const { user } = useAppSelector((state) => state.auth);

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {user?.role === "admin" &&
        adminRoutes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="flex mt-2 items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <route.icon className="h-4 w-4" />
            <p>{route.title} </p>
          </Link>
        ))}
      {user?.role === "superAdmin" &&
        routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="flex mt-2 items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <route.icon className="h-4 w-4" />
            <p>{route.title} </p>
          </Link>
        ))}
    </nav>
  );
};

export default NavLinks;
