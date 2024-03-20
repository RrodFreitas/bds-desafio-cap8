import GithubSearch from "pages/ApiSearchGithub";
import Home from "pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/search">
                <GithubSearch/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;