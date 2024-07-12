import { Logo } from "@/components/Logo"

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <Logo />
            <h1 className="text-3xl my-2">Bienvenido al dashboard</h1>
            <h2 className="text-2xl mb-3">Hacel1Dashboard</h2>
            {children}
        </div>
    )
}

export default LayoutAuth
