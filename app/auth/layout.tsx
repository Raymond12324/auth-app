export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className="bg-sky-500 h-full flex items-center justify-center">
            <div>
            {children}
            </div>
            
        </div>
    )
}