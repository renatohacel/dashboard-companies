import { Logo } from "@/components/Logo"

import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"

export const Sidebar = () => {
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col border-r">
                <Logo />
                <SidebarRoutes />
            </div>
        </div>
    )
}
