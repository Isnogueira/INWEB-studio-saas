import { Outlet } from "react-router-dom";

export function PrivateLayout() {
    return (
        <div>
            <header>Header</header>

            <aside>Sidebar</aside>

            <main>
                <Outlet />
            </main>

            <footer>Footer</footer>
        </div>
    );
}