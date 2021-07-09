import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/index"));
const SignInPage = lazy(() => import("../pages/signIn/index"));
const SignUpPage = lazy(() => import("../pages/signUp/index"));
const NewPostPage = lazy(() => import("../pages/editor/index"));
const SettingPage = lazy(() => import("../pages/settings/index"));
const ProfilePage = lazy(() => import("../pages/profile/index"));

const RouterApp = () => {
  return (
    <Router>
      <Suspense fallback>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/editor">
            <NewPostPage />
          </Route>
          <Route path="/setting">
            <SettingPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/login">
            <SignInPage />
          </Route>
          <Route path="/register">
            <SignUpPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default RouterApp;
