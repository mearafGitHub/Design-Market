import React, { Component } from 'react';
import { Switch,Route} from 'react-router-dom';
import 'react-google-font-loader';
import 'react-icons/fa';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DetailPage from './components/DetailPage'
import DesignList from './components/DesignList'
import Default from './components/Default'
import Cart from './components/Cart/Cart'
import Modal from './components/Modal'
import Login from './components/Account/Login'
import Intro from './components/Intro'
import Terms from './components/Terms'
import UserForm from './components/Account/UserForm'
import PublicPage from './components/PublicPage'
import DesignerShop from './components/Account/DesignerShop'
import AdminDashBoard from './components/Account/AdminDashBoard'


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={PublicPage}/>
                    <Route path="/market" component={DesignList}/> 
                    <Route path="/details" component={DetailPage}/> 
                    <Route path="/register" component={UserForm}/>
                    <Route path="/login" component={Login} />
                    <Route path="/cart" component={Cart}/>  
                    <Route path="/intro" component={Intro}/>  
                    <Route path="/terms-and-policy" component={Terms}/> 
                    <Route path="/form" component={UserForm}/>
                    <Route path="/dash-board-admin" component={AdminDashBoard}/>  
                    <Route path="/designer-shop" component={DesignerShop}/> 
                    <Route component={Default}/> 
                </Switch>
                <Modal />
            </React.Fragment>
        );
    }
}

export default App;