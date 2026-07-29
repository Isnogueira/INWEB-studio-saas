import Header from "@/components/layout/header";
import SideBar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {

    return (

        <div className="app-layout">
            <Header />

            <SideBar />

            <div className="content">

                <header />
                <main>

                    <Outlet />

                </main>

            </div>

        </div>

    );

}