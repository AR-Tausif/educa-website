"use client";

import {
  useBlockingUserByIdMutation,
  useDeleteUserByIdMutation,
  useGetAllUserQuery,
  useMakeAdminUserByIdMutation,
  useRemoveAdminUserByIdMutation,
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
  const { data: allUser } = useGetAllUserQuery(undefined);
  const [deleteUserById] = useDeleteUserByIdMutation();
  const [blockingUserById] = useBlockingUserByIdMutation();
  const [makeAdminUserById] = useMakeAdminUserByIdMutation();
  const [removeAdminUserById] = useRemoveAdminUserByIdMutation();

  const handleDelete = async (_id: string) => {
    try {
      const res = await deleteUserById(_id);
    } catch (err) {
  
    }
  };
  const handleUserBlocking = async (_id: string) => {

    try {
      const res = await blockingUserById(_id);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUserMakingAdmin = async (_id: string) => {
 
    try {
      const res = await makeAdminUserById(_id);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAdminMakingUser = async (_id: string) => {

    try {
      const res = await removeAdminUserById(_id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {allUser?.data.map((user: TUser, index: number) => (
        <TableRow key={user._id}>
          <TableCell className="text-xl">
            <Checkbox id="terms" className="mr-3" />
            {index + 1}
          </TableCell>

          <TableCell className="font-medium ">{user.fullName}</TableCell>
          <TableCell className="font-medium ">{user.email}</TableCell>

          <TableCell className="font-medium ">
            {user.role == "admin" ? (
              <Badge className="bg-green-600">{user.role}</Badge>
            ) : (
              <Badge variant="outline">{user.role}</Badge>
            )}
          </TableCell>

          <TableCell className="font-medium">
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
                  {user.role == "admin" ? (<AlertDialogAction
                    onClick={() => handleAdminMakingUser(user._id)}
                  >
                    Make User
                  </AlertDialogAction>) : (<AlertDialogAction
                    onClick={() => handleUserMakingAdmin(user._id)}
                  >
                    Make Admin
                  </AlertDialogAction>)}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>

          <TableCell className="font-medium   text-yellow-700">
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

          <TableCell className="font-medium text-xl text-red-500">
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
