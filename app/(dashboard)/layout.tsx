import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getApiLimit } from "@/lib/api-limit"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const apiLimit = await getApiLimit();
  
  return (
    <section className=' h-full'>
      <div className="hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <Sidebar apiLimit={apiLimit} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}

      </main>
    </section>
  )
}
