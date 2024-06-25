import Image from "next/image";
import React, { ReactNode } from "react";
import AvatarImage from "@/assets/student/avatar.png";

const ProfileImageAndTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center gap-4 py-10">
      {/* <div className="w-32 h-32">
        <Image
          alt="Student Image"
          src={AvatarImage}
          className="w-full h-full rounded-full border-2 border-blue-400"
        />
      </div> */}

      {children}
    </div>
  );
};

export default ProfileImageAndTitle;
