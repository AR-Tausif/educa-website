import Link from "next/link";
import StudentsTable from "@/components/all-student/StudentsTable";
import FormHeadingContent from "@/components/FormHeadingContent";



const AllStudentsPage = () => {

  return (
    <div className="h-screen px-5 pb-5">
      <FormHeadingContent title="All students" desc="Here listed all students from our server." csName="text-center pb-5" />

      {/* <div className="flex justify-end items-end">
        <Link href="/dashboard/add-student">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
            Add New Student
          </button>
        </Link>
      </div>
      <h1 className="text-center text-black font-bold text-2xl">
        All Students
      </h1>

      // <StudentsTable/> */}
      
      <StudentsTable/>
{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    student name
                </th>
                <th scope="col" className="px-6 py-3">
                    Class
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {"Tausif Ahmed"}
                </th>
                <td className="px-6 py-4">
                    {"pre-play"}
                </td>
                <td className="px-6 py-4">
                    {"Active"}
                </td>
                <td className="px-6 py-4">
                    {"Male"}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div> */}

    </div>
  );
};

export default AllStudentsPage;
