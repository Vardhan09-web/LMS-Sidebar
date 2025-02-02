import Sidebar from "@/components/Sidebar"; // Adjust the path
import Topbar from "@/components/Topbar"; // Adjust the path



export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="flex h-screen">
                {/* Sidebar (Fixed on the left) */}
                <Sidebar />
            </div>
            
            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Topbar (Fixed at the top) */}
                <Topbar />

                {/* Dynamic Content */}
                <div className="p-4 overflow-auto">{children}</div>
            </div>

            

        </div>

    );
}
