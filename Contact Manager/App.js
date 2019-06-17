import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contact/AddContact';
import {Provider} from './components/context'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/pages/About'
import Notfound from './components/pages/Notfound';
import Test from './components/Test/Test'
import EditContact from './components/contact/EditContact'

function App() { 
  return (
    <Provider>
    <Router>
    <div className="App">
    <Header branding="Contact Manager"/>
   <div className="container">
   <Switch>
     <Route exact path="/" component={Contacts}/>
     <Route exact path="/about/" component={About}/>
     <Route exact path="/contact/add" component={AddContact}/>
     <Route exact path="/test" component={Test}/>
     <Route exact path="/contact/edit/:id" component={EditContact}/>
     
     <Route component={Notfound}/>
   </Switch>
   </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
