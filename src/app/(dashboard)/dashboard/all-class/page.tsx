import FormHeadingContent from "@/components/FormHeadingContent";
import GetAllClassFromDB from "@/components/class/GetAllClassFromDB";
import CreateClassModalForm from "@/components/common/CreateClassModalForm";
import { CreateAcademicPaymentForm } from "@/components/payment/CreateAcademicPaymentForm";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import React from "react";

const AllClassPage = () => {
  return (
    <div>
      <FormHeadingContent
        csName="text-center"
        csTitle="text-lg"
        title="Available class"
        desc="Classes available in Educa International School"
      />

      <div className="grid grid-cols-3 py-6 gap-5">
        <GetAllClassFromDB />
      </div>
      {/* <Dialog>
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
      </Dialog> */}
      <Sheet>
        <div
          className="flex py-4 flex-1  justify-center rounded-lg "
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">

            <SheetTrigger asChild>
              <Button>Create Class</Button>
            </SheetTrigger>

          </div>
        </div>
        <SheetContent className="w-[50%]">
          <ScrollArea className="h-full w-full">
            <SheetHeader>
              <SheetTitle className="text-center">Create Class</SheetTitle>
              <SheetDescription className="text-center sm:px-5 md:px-5 lg:px-20">
                {"Create class with follow these input. When you create class then will need to create Academic Payment. Click save when you're done."}
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <CreateAcademicPaymentForm />
            </div>
            {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AllClassPage;
