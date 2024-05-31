import { GraduationCap } from "lucide-react";
import React, { ReactNode } from "react";

type TItem = {
  title: string;
  icon: ReactNode;
  number: number;
  id: number;
};
type TProps = {
  item: any;
};
const CountingBox = ({ item }: TProps) => {
  const { title, icon, number } = item;
  return (
    <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
      <GraduationCap />
      <div className="pr-6 space-y-1">
        <p className="text-base">{title}</p>
        <p className="text-xs text-gray-400">{number}</p>
      </div>
    </div>
  );
};

export default CountingBox;
