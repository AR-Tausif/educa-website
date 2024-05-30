import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import UsersTable from "@/components/user/UsersTable";

const AllUsers = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center text-black font-bold text-2xl underline">
        All User Information
      </h1>

      <Table>
        <TableCaption>A list of your recent User.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.L</TableHead>

            <TableHead>User Name</TableHead>
            <TableHead>User Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Promotion</TableHead>
            <TableHead>block</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <UsersTable/>
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;
