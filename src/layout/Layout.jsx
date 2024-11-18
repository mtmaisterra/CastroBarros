import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


function Layout ({children}) {
    return (
        <>
            <div className="bg-secondaryLight">
                <NavBar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;