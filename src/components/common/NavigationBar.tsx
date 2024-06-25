import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Button } from "../ui/button";
import SectionTitle from "./SectionTitle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Bell,
  ChevronDown,
  CircleUser,
  Cloud,
  CreditCard,
  Github,
  Home,
  Keyboard,
  LifeBuoy,
  LineChart,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Package,
  Package2,
  Plus,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { logOut } from "@/redux/features/auth/authSlice";

import HandleLogOut from "@/lib/HandleLogOut";
import { routes } from "./SideNavigationBar";
import { APP_ROUTES } from "@/lib/utils";
import NavLinks from "./NavLinks";

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
              <NavLinks/>
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
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <div className="flex gap-2 items-center rounded-md border pr-2">
          <Button variant="secondary" size="icon" className="rounded-md">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
            <ChevronDown className="h-5 w-5"/>
          </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>

              <Link href={`/${APP_ROUTES.PROFILE}`}>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <a href="https://github.com/AR-Tausif" target="_blank">
              <span>GitHub</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <HandleLogOut/>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default NavigationBar;
