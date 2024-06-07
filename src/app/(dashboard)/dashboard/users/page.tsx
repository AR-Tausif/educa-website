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
import FormHeadingContent from "@/components/FormHeadingContent";

const AllUsers = () => {
  return (
    <div className="h-screen">
      <FormHeadingContent title="Available users" desc="Here listed all users from our server." className="text-center pb-5" />

      <Table className="border rounded-md">
        <TableCaption>A list of your recent User.</TableCaption>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>S.L</TableHead>

            <TableHead>User Name</TableHead>
            <TableHead>User Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Promotion</TableHead>
            <TableHead>Block</TableHead>
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
