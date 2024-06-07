"use client";

import { useDeleteClassByIdMutation, useGetAllClassQuery } from "@/redux/features/class/createClasApi";
import { useAppDispatch } from "@/redux/hooks";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
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
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { UpdateAcademicPaymentForm } from "../payment/UpdateAcademicPaymentForm";
import { GanttChart } from "lucide-react";
import ViewSingleAcademicPayment from "../payment/ViewSingleAcademicPayment";

const GetAllClassFromDB = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetAllClassQuery(undefined);
  const [deleteClassById] = useDeleteClassByIdMutation()

  type TClass = {
    _id: string;
    name: string;
  };


  const handleDeleteClassById = async (_id: string) => {
    const res = await deleteClassById(_id)
    console.log(res)

  }
  return (
    <>
      {data?.data?.map((item: TClass) => (
        <div key={item._id} className="p-6 rounded-md border bg-slate-400">
          <div className="px-2 py-2">
            <div className="font-bold text-xl mb-2">
              <h1 className="text-center">{item.name}</h1>
            </div>
            <div className="flex justify-between items-center mt-10 mr-10 ms-10 ">
              <div>
                <Sheet>
                  <div
                    className="flex py-4 flex-1 items-end justify-end rounded-lg "
                    x-chunk="dashboard-02-chunk-1"
                  >
                    <div className="flex flex-col items-center gap-1 text-center">

                      <SheetTrigger asChild>
                        <div title="Edit" className=" p-1.5 transition-all  rounded-full hover:bg-gray-400 cursor-pointer border border-transparent hover:border-gray-300">
                          <FaEdit className="text-blue-700 font-bold text-3xl" />
                        </div>
                      </SheetTrigger>

                    </div>
                  </div>

                  <SheetContent className="w-full sm:w-[50%]">
                    <ScrollArea className="h-full w-full px-4">
                      <SheetHeader>
                        <SheetTitle className="text-center">Update Class</SheetTitle>
                        <SheetDescription className="text-center sm:px-5 md:px-5 lg:px-20">
                          {"Updating class with follow these input. When you update class then you can edit Academic Payment if needed. Click submit when you're done."}
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <UpdateAcademicPaymentForm classId={item._id} />
                      </div>
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
              </div>
              <div>
                <Sheet>
                  <div
                    className="flex py-4 flex-1 items-end justify-end rounded-lg "
                    x-chunk="dashboard-02-chunk-1"
                  >
                    <div title="View" className="flex flex-col items-center text-center p-1.5 transition-all  rounded-full hover:bg-gray-400 cursor-pointer border border-transparent hover:border-gray-300">
                      <SheetTrigger asChild>
                        <GanttChart className="text-blue-700 font-bold text-5xl" />
                      </SheetTrigger>
                    </div>
                  </div>

                  <SheetContent className="w-full sm:w-[50%]">
                    <ScrollArea className="h-full w-full px-4">
                      <SheetHeader>
                        <SheetTitle className="text-center">View Academic Payment</SheetTitle>
                        <SheetDescription className="text-center sm:px-5 md:px-5 lg:px-20">
                          Here display academic payment details.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <ViewSingleAcademicPayment classId={item._id} />
                      </div>
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
              </div>
              <div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <div title="Delete" className=" p-1.5 transition-all  rounded-full hover:bg-gray-400 cursor-pointer border border-transparent hover:border-gray-300">
                      <MdAutoDelete className="text-red-500 font-bold text-3xl" />
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure to delete?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDeleteClassById(item._id)}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GetAllClassFromDB;
