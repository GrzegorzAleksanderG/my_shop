import Body from "./bodyComponents/Body"
import Footer from "./footerComponents/Footer"
import Header from "./headerComponents/Header"

export const MainWrapper = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}