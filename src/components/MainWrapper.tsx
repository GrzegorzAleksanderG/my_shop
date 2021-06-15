import Body from "./bodyComponents/Body"
import Footer from "./footerComponents/Footer"
import Header from "./headerComponents/Header"
import {
    BrowserRouter
} from "react-router-dom";
import { connect } from "react-redux";

const MainWrapper = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Body />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        loginReducer: state.loginReducer,
        registerReducer: state.registerReducer
    }
}

const mapDispatchToProps = {}; ///...

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);