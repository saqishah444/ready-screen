import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardHero from "@/components/DashboardHero";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 pt-14 pb-20">
          <DashboardHero />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
