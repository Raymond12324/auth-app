export default function Layout({ children } : { children: React.ReactNode }) {

    return (
        <div>
            <h3 className="font-bold">DashBoard</h3>
            {children}
        </div>
    )
}