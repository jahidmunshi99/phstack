import AdminHeader from "@/components/layout/AdminHeader";
import AdminSidebar from "@/components/layout/AdminSidebar"
import MainLayout from "@/components/layout/MainLayout"
export default function AdminLayout({
children,
}:{
children:React.ReactNode
}){

return (

<div className="min-h-screen flex flex-col">

    <AdminHeader/>

    <div className="flex flex-1">

    <AdminSidebar/>
    <MainLayout>
        {children}
    </MainLayout>

    </div>
</div>

)

}