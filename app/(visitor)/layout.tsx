import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";


export default function VisitorLayout({
children,
}:{
children:React.ReactNode
}){

return (

<div className="mx-5 md:px-5 md:ml-70 pt-15 pb-5 rounded">

<Header/>

<Sidebar/>

<main className="bg-white">

{children}

</main>
</div>

)

}