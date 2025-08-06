import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = cookies();
  // const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="flex flex-col h-full">
            <div className="p-4 border-b flex items-center justify-between">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Chat Dashboard</h1>
              <div></div> {/* Placeholder for right-aligned items if needed */}
            </div>
            <div className="flex-1 overflow-auto">{children}</div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
