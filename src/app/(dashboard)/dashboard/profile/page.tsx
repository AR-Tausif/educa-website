import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import UserInfoForm from "@/components/dashboard/profile/UserInfoForm"
import ChangePassForm from "@/components/dashboard/profile/ChangePassForm"

export default function Profile() {
  return (
    <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>My Info</CardTitle>
                <CardDescription>
                  Here displayed that you stored in database.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserInfoForm/>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                {/* <Button>Save</Button> */}
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Here displayed that you login with the credentials.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChangePassForm/>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                {/* <Button>Save</Button> */}
              </CardFooter>
            </Card>
          </div>
  )
}
