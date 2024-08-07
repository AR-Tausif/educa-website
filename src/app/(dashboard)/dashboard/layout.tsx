import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideNavigationBar from "@/components/common/SideNavigationBar";
import NavigationBar from "@/components/common/NavigationBar";
import PrivateRoute from "@/lib/PrivateRoute";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Fees Management App",
  description: "Created for school fees management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className={inter.className}>
      <PrivateRoute>
        {/* md:grid-cols-[220px_1fr] */}
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 lg:block">
            <SideNavigationBar />
          </div>
          <div className="flex flex-col">
            <NavigationBar />
            <section className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </section>
          </div>
        </div>
      </PrivateRoute>
    </div>

  );
}
