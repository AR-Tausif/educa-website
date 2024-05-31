import FormHeadingContent from "@/components/FormHeadingContent";
import GetAllClassFromDB from "@/components/class/GetAllClassFromDB";
import CreateClassModalForm from "@/components/common/CreateClassModalForm";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

const AllClassPage = () => {
  return (
    <div>
      <FormHeadingContent
        csName="text-center"
        csTitle="text-lg"
        title="Available class"
        desc="Classes available in Educa International School."
      />

      <div className="grid grid-cols-3 py-6 gap-5">
        <GetAllClassFromDB />
      </div>
      <Dialog>
        <div
          className="flex py-4 flex-1 items-end justify-center rounded-lg"
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
    </div>
  );
};

export default AllClassPage;
