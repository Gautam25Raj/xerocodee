import Main from "@/components/layout/dashboard/Main";
import Navbar from "@/components/layout/dashboard/Navbar";
import SideBar from "@/components/layout/dashboard/SideBar";

export default function DashboardPage() {
  return (
    <main className="w-screen flex flex-col ">
      <Navbar />

      <div className="flex-1 flex gap-4 mx-8">
        <SideBar />
        <Main />
      </div>
    </main>
  );
}
