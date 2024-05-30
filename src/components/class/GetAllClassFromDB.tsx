"use client";

import { useDeleteClassByIdMutation, useGetAllClassQuery } from "@/redux/features/class/createClasApi";
import { useAppDispatch } from "@/redux/hooks";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { Dialog, DialogTrigger } from "../ui/dialog";
import EditClassModalForm from "../common/EditClassModalForm";
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

const GetAllClassFromDB = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetAllClassQuery(undefined);
  const [deleteClassById]=useDeleteClassByIdMutation()
  console.log(error);
  type TClass = {
    _id: string;
    name: string;
  };


  const handleDeleteClassById = async(_id:string)=>{
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
              <span>
                <Dialog>
                  <div
                    className="flex py-4 flex-1 items-end justify-end rounded-lg "
                    x-chunk="dashboard-02-chunk-1"
                  >
                    <div className="flex flex-col items-center gap-1 text-center">
                      <DialogTrigger asChild>
                        <FaEdit className="text-blue-700 font-bold text-3xl" />
                      </DialogTrigger>
                    </div>
                  </div>
                  <EditClassModalForm classId={item._id} />
                </Dialog>
              </span>
              <span>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <MdAutoDelete className="text-red-500 font-bold text-3xl" />
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
                      <AlertDialogAction onClick={()=>handleDeleteClassById(item._id)}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GetAllClassFromDB;
