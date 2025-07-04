interface layoutProps{
    children: React.ReactNode;
}
const Layout = ({children}: layoutProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {children}
        </div>
    )
}

export default Layout;