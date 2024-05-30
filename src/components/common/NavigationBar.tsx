import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Button } from "../ui/button";
import SectionTitle from "./SectionTitle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { logOut } from "@/redux/features/auth/authSlice";

import HandleLogOut from "@/lib/HandleLogOut";

const NavigationBar = () => {
  return (
    <>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col w-96">
            <ScrollArea className="p-2 ">
              <nav className="grid gap-2 text-lg font-medium w-40 mx-auto">
                <Link
                  href="/dashboard"
                  className="flex  items-center  gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="text-blue-600">EDUCA</span>
                </Link>

                <Link
                  href="/dashboard/all-class"
                  className="mx-[-0.65rem] flex items-center gap-4 bg-blue-500 mt-6 text-white font-bold text-center rounded-full  px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>

                <Link
                  href="/dashboard/all-class"
                  className="mx-[-0.65rem] flex items-center gap-4 bg-blue-500 mt-6 text-white font-bold text-center rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  All Class
                </Link>

                <Link
                  href="/dashboard/all-students"
                  className="mx-[-0.65rem] flex items-center gap-4 bg-blue-500 mt-6 text-white font-bold text-center rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  All Student
                </Link>

                <Link
                  href="/dashboard/users"
                  className="mx-[-0.65rem] flex items-center gap-4 bg-blue-500 mt-6 text-white font-bold text-center rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Users
                </Link>

                <Link
                  href="/dashboard/all-payment-history"
                  className="mx-[-0.65rem] flex items-center gap-4 bg-blue-500 mt-6 text-white font-bold text-center rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Payment History
                </Link>

                <Link
                  href="/dashboard/add-student"
                  className="mx-[-0.65rem] flex items-center gap-4 bg-blue-500 mt-6 text-white font-bold text-center rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Add Student
                </Link>

                <Link
                  href="/dashboard/all-payment-history"
                  className="mx-[-0.65rem] flex items-center gap-4 bg-blue-500 mt-6 text-white font-bold text-center rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Class Student
                </Link>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <HandleLogOut />
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default NavigationBar;
