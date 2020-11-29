import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

//if we want to chagne anything, we change it in app.css, which will override the semantic ui. 

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute'

import MenuBar from './components/MenuBar'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PastComplaints from './pages/PastComplaints';
import LodgeComplaint from './pages/LodgeComplaint';
import Assets from './pages/Assets';
import SinglePost from './pages/SinglePost.js';
import SinglePostAsset from './pages/SinglePostAsset.js';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Container>
        <MenuBar/>
        <Route exact path='/' component = {Home}/>
        <AuthRoute exact path="/login" component = {Login}/>
        <AuthRoute exact path="/register" component = {Register}/>
        <Route exact path="/lodgecomplaint" component = {LodgeComplaint}/>
        <Route exact path="/pastcomplaints" component = {PastComplaints}/>
        <Route exact path="/assets" component = {Assets}/>
        <Route exact path="/posts/:postId" component = {SinglePost}/>
        <Route exact path="/assets/:assetId" component = {SinglePostAsset}/>
      </Container>
      
    </Router>
    </AuthProvider>
  );
}

export default App;
