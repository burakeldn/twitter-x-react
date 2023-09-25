import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Rightbar from "../rightbar";


export default function MainLayout() {
    return (
        <div className="main-layout">
            <Sidebar />
            <main className="main-div">
                <main className="main-div-2">
                    <Outlet />
                </main>
                <Rightbar />
            </main>
        </div>
    )
}