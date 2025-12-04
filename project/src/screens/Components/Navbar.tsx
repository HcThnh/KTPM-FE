
interface SidebarProps {
    activePage: string;
    onNavigate: (pageName: string) => void;
}

export const Navbar = ({activePage, onNavigate}: SidebarProps): JSX.Element => {
    const menuItem = [
        {label: "home", name: "HOME"},
        {label: "your-courses", name: "YOUR COURSES"},
        {label: "browse-courses", name: "BROWSE COURSES"}
    ]

    return (
        <aside className="flex w-screen justify-between border-b border-[#e7e7e8]">
            <div className="w-[80px] h-[80px] flex items-center justify-center border-r border-[#e7e7e8]">
                <img src="/book.svg" alt="book"/>
            </div>
            <nav className="flex">
                {menuItem.map((item, index) => {
                    const isActive = item.label === activePage;
                    return (
                        <button key={index}
                        onClick={() => onNavigate(item.label)}
                        className={`px-4 hover:text-[#0088ff] transform transition hover:font-semibold ${
                            isActive ? "text-[#0088ff]" : "text-[#000]"
                        }`}>
                            {item.name}
                        </button>
                    );
                })}
            </nav>
            <div className="flex items-center justify-center gap-2 w-[220px] border-l border-[#e7e7e8]">
                <img src="/image.png" alt="avatar" 
                className="w-[40px] h-[40px] rounded-full"/>
                <div>
                    <h4 className="text-[#757575] font-medium">John</h4>
                    <p className="text-[#b3b3b3]">Student</p>
                </div>
            </div>
        </aside>
    )
}
