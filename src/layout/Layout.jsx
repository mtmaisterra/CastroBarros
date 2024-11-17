import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


function Layout ({children}) {
    return (
        <>
            <div className="">
                <NavBar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;