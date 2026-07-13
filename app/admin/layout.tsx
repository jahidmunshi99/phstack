import AdminHeader from "@/components/layout/AdminHeader";
import AdminSidebar from "@/components/layout/AdminSidebar"

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

<main className="flex-1 bg-gray-100">

{children}

</main>

</div>
</div>

)

}