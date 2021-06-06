import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import LoginScreen from "./loginPage/LoginScreen";
import RegistrationScreen from './registrationPage/RegistrationScreen';
import ArticlesList from './articlesListPage/ArticlesList';

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
                </Switch>
            </div>
    )
}
export default Body;