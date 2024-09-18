
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

import Providers from "./Providers"

export default function Layout() {
    return (
        <Providers>
            <Header />
            <Outlet />
            <Footer />
        </Providers>

    )
}