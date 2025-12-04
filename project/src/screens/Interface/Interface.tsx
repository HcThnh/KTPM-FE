import { Navbar } from "../Components";
import { useState } from "react";
import Home from "./Home";
import YourCourses from "./YourCourse";

export const Interface = () : JSX.Element => {
    const [activePage, setActivePage] = useState("home");

    const renderContent = () => {
        switch(activePage) {
            case "home":
                return <Home/>
            case "your-courses":
                return <YourCourses/>
            default:
                return <div className="p-8">Chức năng đang phát triển: {activePage}</div>;
        }
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Navbar activePage={activePage} onNavigate={setActivePage}/>
            <main className="flex-1 overflow-auto">
                {renderContent()}
            </main>
        </div>
    )
}

export default Interface;