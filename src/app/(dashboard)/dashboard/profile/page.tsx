import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
