"use client";

import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const user = useAppSelector(selectUser);

    useEffect(() => {
        if (!user) {
            router.push("/login");
        } else if (user.role !== 'admin' && user.role !== 'superAdmin') {
            router.push("/");
        }
    }, [user, router]);

    if (!user || (user.role !== 'admin' && user.role !== 'superAdmin')) {
        return <div className="flex justify-center items-center"><Loader className="animate-spin"/></div>; // Or a loading spinner
    }

    return <>{children}</>;
};

export default AdminAuthProvider;
