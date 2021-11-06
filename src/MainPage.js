import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import Ahmedabad from "./pages/popular-cities/Ahmedabad";
import Bangalore from "./pages/popular-cities/Bangalore";
import Chennai from "./pages/popular-cities/Chennai";
import Restaurents from "./pages/restaurents/Restaurents";

const MainPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/ahmedabad" component={Ahmedabad} />
          <Route exact path="/bangalore" component={Bangalore} />
          <Route exact path="/Chennai" component={Chennai} />
          <Route path="/home/:url" component={Restaurents} />
          
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
