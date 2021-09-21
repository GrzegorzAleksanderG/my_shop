import {
    Switch,
    Route
  } from "react-router-dom";
import LoginScreen from "./loginPage/LoginScreen";
import RegistrationScreen from './registrationPage/RegistrationScreen';
import ArticlesList from './articlesListPage/ArticlesList';
import Cart from './cartPage/Cart';
import LogoutScreen from './loginPage/LogoutScreen';
import ErrorPage404 from './ErrorSite404';
import Gallery from './galleryPage/Gallery';
import Summary from "./summaryPage/Summary";

const Body = () => {
    return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Gallery />
                    </Route>
                    <Route path="/login">
                        <LoginScreen />
                    </Route>
                    <Route path="/logout">
                        <LogoutScreen/>
                    </Route>
                    <Route path="/registration">
                        <RegistrationScreen />
                    </Route>
                    <Route path="/articles">
                        <ArticlesList />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/summary">
                        <Summary />
                    </Route>
                    <Route>
                        <ErrorPage404/>
                    </Route>
                </Switch>
            </div>
    )
}
export default Body;