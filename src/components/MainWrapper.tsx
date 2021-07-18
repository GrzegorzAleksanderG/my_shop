import Body from "./bodyComponents/Body"
import Footer from "./footerComponents/Footer"
import Header from "./headerComponents/Header"
import {
    BrowserRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { StateType } from "../reducers/stateReducerTypes";

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

const mapStateToProps = (state: StateType) => {
    return {
        loginReducer: state.loginReducer,
        registerReducer: state.registerReducer
    }
}

const mapDispatchToProps = {}; ///...

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);