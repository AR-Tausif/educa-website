import GetAllClassFromDB from "@/components/class/GetAllClassFromDB";
import CreateClassModalForm from "@/components/common/CreateClassModalForm";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

const AllClassPage = () => {
  return (
    <div>
      <Dialog>
        <div
          className="flex py-4 flex-1 items-end justify-end rounded-lg "
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <DialogTrigger asChild>
              <Button>Create Class</Button>
            </DialogTrigger>
          </div>
        </div>
        <CreateClassModalForm />
      </Dialog>

      <h1 className="text-center font-bold text-2xl underline">All Class</h1>
      <div className="grid grid-cols-2 py-6 gap-5">
        <GetAllClassFromDB />
      </div>
    </div>
  );
};

export default AllClassPage;
