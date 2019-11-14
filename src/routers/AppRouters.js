import React from 'react';
import Home from '../components/Home';
import Contact from '../components/Contact';
import TellUs from '../components/TellUs';
import About from '../components/About';
import { BrowserRouter, Route,Switch } from "react-router-dom";

 const AppRouter = ()=>(
    <div>
       <BrowserRouter>
       <Switch>
         <Route path="/" component={Home} exact={true}/>
         <Route path="/tellus" component={TellUs} exact={true}/>
         <Route path="/about" component={About} exact={true}/>
         <Route path="/contact" component={Contact} exact={true}/>
        </Switch>
       </BrowserRouter>
    </div>
)
export default AppRouter;