import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FormHeadingContent from "@/components/FormHeadingContent";
import AllPaymentHistoryTableRow from "@/components/payment/AllPaymentHistoryTableRow";

const AllPaymentHistoryPage = () => {
  return (
    <div className="h-screen">
      <FormHeadingContent title="All payment history" desc="Here listed all payment histories from our server." className="text-center pb-5" />

      <Table>
        <TableCaption>A list of your recent Students.</TableCaption>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>S.L</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>View</TableHead>
            {/* <TableHead>Print </TableHead>
            <TableHead>Download</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          <AllPaymentHistoryTableRow/>
        </TableBody>
      </Table>
    </div>
  );
};

export default AllPaymentHistoryPage;
