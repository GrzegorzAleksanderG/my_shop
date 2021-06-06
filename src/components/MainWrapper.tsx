import Body from "./bodyComponents/Body"
import Footer from "./footerComponents/Footer"
import Header from "./headerComponents/Header"
import {
    BrowserRouter
} from "react-router-dom";

export const MainWrapper = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Body/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}