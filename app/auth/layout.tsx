export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className=" h-full flex items-center justify-center bg-gray-200">
            <div>
            {children}
            </div>
        </div>
    )
}