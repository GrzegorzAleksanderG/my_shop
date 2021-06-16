import {
    Switch,
    Route
  } from "react-router-dom";
import LoginScreen from "./loginPage/LoginScreen";
import RegistrationScreen from './registrationPage/RegistrationScreen';
import RegistrationTest from './registrationPage/RegistrationTest';
import ArticlesList from './articlesListPage/ArticlesList';
import Cart from './cartPage/Cart';

const Body = () => {
    return (
            <div>
                {/*TODO <iframe></iframe>*/}
                <Switch>
                    <Route path="/login">
                        <LoginScreen />
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
                    <Route path="/test_register">
                        <RegistrationTest parameters={window.location.search}/>
                    </Route>
                </Switch>
            </div>
    )
}
export default Body;