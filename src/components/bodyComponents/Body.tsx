import {
    Switch,
    Route
  } from "react-router-dom";
import LoginScreen from "./loginPage/LoginScreen";
import RegistrationScreen from './registrationPage/RegistrationScreen';
import ArticlesList from './articlesListPage/ArticlesList';
import Cart from './cartPage/Cart';
import LogoutScreen from './loginPage/LogoutScreen';

const Body = () => {
    return (
            <div>
                {/*TODO <iframe></iframe>*/}
                <Switch>
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
                </Switch>
            </div>
    )
}
export default Body;