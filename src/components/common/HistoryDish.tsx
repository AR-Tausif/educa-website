import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Table, TableHead, TableHeader, TableRow } from "../ui/table";
import { ArrowUpRight } from "lucide-react";
import { APP_ROUTES } from "@/lib/utils";
import HistoryDishTableBody from "./HistoryDishTableBody";

const HistoryDish = () => {
  return (
    <div className="w-full">
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your school.
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href={`/${APP_ROUTES.ALL_PAYMENT_HISTORY}`}>
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="">Class</TableHead>
                <TableHead className="hidden xl:table-column">Status</TableHead>
                <TableHead className="">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <HistoryDishTableBody />
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryDish;
