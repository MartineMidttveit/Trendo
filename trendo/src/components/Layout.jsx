
import Header from "./Header"
import Footer from "./Footer"
import Frontpage from "../pages/Frontpage"
import Providers from "./Providers"

export default function Layout() {
    return (
    <Providers>
        <Header />
        <Frontpage /> 
        <Footer />
    </Providers>
    
    )
}