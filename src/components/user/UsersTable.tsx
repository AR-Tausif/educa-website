"use client";

import {
    useBlockingUserByIdMutation,
  useDeleteUserByIdMutation,
  useGetAllUserQuery,
  useMakeAdminUserByIdMutation,
} from "@/redux/features/user/userApi";

import { TableCell, TableRow } from "@/components/ui/table";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { MdBlock } from "react-icons/md";

import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Badge } from "../ui/badge";
import { TUser } from "@/types/user.type";

const UsersTable = () => {
  const { data:allUser } = useGetAllUserQuery(undefined);
  const [deleteUserById] = useDeleteUserByIdMutation();
  const [blockingUserById] = useBlockingUserByIdMutation();
  const [makeAdminUserById] = useMakeAdminUserByIdMutation();

  const handleDelete = async (_id: string) => {
    console.log("delete");
    try {
      const res = await deleteUserById(_id);
      console.log("delete student ==>", res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUserBlocking = async (_id: string) => {
    console.log("delete");
    try {
      const res = await blockingUserById(_id);
      console.log("delete student ==>", res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUserMakingAdmin = async (_id: string) => {
    console.log("delete");
    try {
      const res = await makeAdminUserById(_id);
      console.log("delete student ==>", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {allUser?.data.map((user:TUser , index:number) => (
        <TableRow key={user._id}>
          <TableCell className=" border-blue-600 border-b-4 border-t-4 border-s-4 border-r-2 text-xl">
            <Checkbox id="terms" className="mr-3" />
            {index + 1}
          </TableCell>

          <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
            {user.fullName}
          </TableCell>
          <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
            {user.email}
          </TableCell>

          <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4">
            {
                user.role==  "admin" ? <Badge className="bg-green-600">
                {user.role}
                </Badge> : <Badge variant="outline">
            {user.role}
            </Badge> 
            }
          </TableCell>

          <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4  text-blue-500">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <FaEdit className="text-2xl" />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you absolutely sure to making admin?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => handleUserMakingAdmin(user._id)}
                  >
                    Make Admin
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>

          <TableCell className="font-medium  border-blue-600 border-t-4 border-b-4  text-yellow-700">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <MdBlock className="text-2xl" />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you absolutely sure to blocking user?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => handleUserBlocking(user._id)}
                  >
                    Block User
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>

          <TableCell className="font-medium  border-blue-600 border-b-4 border-t-4 border-r-4 text-xl text-red-500">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <MdAutoDelete className="text-2xl" />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDelete(user._id)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UsersTable;
