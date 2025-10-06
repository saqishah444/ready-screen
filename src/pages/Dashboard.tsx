import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardHero from "@/components/DashboardHero";
import Footer from "@/components/Footer";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col w-full">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 pt-14 pb-20 px-4 md:px-6 lg:px-8">
          <DashboardHero />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
