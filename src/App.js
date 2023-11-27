// eslint-disable-next-line
import React, { Component, useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from "react-router-dom";
import './App.css';

import LoginForm from "./components/LoginForm.js"
import { NavigationBar } from "./components/NavigationBar.js"
import IncidentReport from "./components/IncidentReport.js"
import DashboardTickets from "./components/Dashboard.js"
import CreateTicket from "./components/CreateTicket.js";
import EditTicket from "./components/EditTicket.js";
import DeleteTicket from "./components/DeleteTicket.js";
import ShowTicket from "./components/ShowTicket.js";
import { Footer } from "./components/Footer.js"
import { LandingPage } from "./components/LandingPage.js";
import { SearchPage } from "./components/SearchPage.js";
import { Article } from "./components/Article.js";
import { NotFound } from "./components/404.js";
import useToken from "./components/useToken.js";
import {ArticleCreate} from "./components/ArticleCreate.js";
import {ArticleDelete} from "./components/ArticleDelete.js";
import {ArticleEdit} from "./components/EditArticle.js";





function App() {
//   const { token, setToken } = useToken();
//
//
//   if(!token) {
//   return <LoginForm setToken={setToken} />
// }


    return(
      <Router>
        <ScrollToTop />
        <div className="container">
          <NavigationBar />
          <Switch>
              <Route path="/" exact component = {LoginForm} />  {/*Validation should happen here */}
              <Route path="/dashboard/incident-report" component={IncidentReport} /> {/*Make sure this is only accessible to logged in users */}
              <Route path="/dashboard" component={DashboardTickets} />
              <Route path="/edit/:id" component={EditTicket} /> {/*The id here can be pulled from the id field */}
              <Route path="/delete/:id" component={DeleteTicket} />
              <Route path="/ticket/:id" component={ShowTicket} />
              <Route path="/create" component={CreateTicket}/>
              <Route path="/landing" component = {LandingPage} /> {/*This is the landing page for the user side*/}
              <Route path="/search" component = {SearchPage} />
              <Route path="/article/:id" component = {Article} />
              <Route path ="/articleEdit/:id" component = {ArticleEdit}/>
              <Route path="articleDelete/:id" component = {ArticleDelete}/>
              <Route path="/articleCreate" component = {ArticleCreate} />
              <Route component = {NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>

    );
  }



const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }


export default App;
