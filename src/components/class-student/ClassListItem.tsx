"use client";
import { APP_ROUTES } from "@/lib/utils";
import { useGetAllClassQuery } from "@/redux/features/class/createClasApi";
import Link from "next/link";

const ClassListItem = () => {
  const { data, error, isLoading } = useGetAllClassQuery(undefined);
  if (isLoading) <p>Loading...</p>;
  return (
    <>
      {data?.data.map((item: any) => (
        <div key={item._id} className="w-fit rounded bg-slate-400">
          <Link href={`/${APP_ROUTES.CLASS_STUDENT}/${item._id}`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Class: {item.name}</div>
              <p className="text-gray-700 text-base">{data.length} student</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ClassListItem;
