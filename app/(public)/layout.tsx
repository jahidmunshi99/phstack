import AdminHeader from "@/components/layout/AdminHeader";
// import AdminSidebar from "@/components/layout/AdminSidebar"
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/layout/Sidebar";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <Sidebar />
      <div className="bg-gray-100 min-h-screen">
        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  );
}
