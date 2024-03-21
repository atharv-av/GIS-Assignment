import DesktopMain from "@/components/DesktopMain";
import MobileMain from "@/components/MobileMain";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/SidebarContext";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <DesktopMain />
        <MobileMain />
      </div>
    </SidebarProvider>
  );
}
