import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Register from './RegisterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{
    render(){

        const Homepage = () => {
            return <Home />
        }

        return(
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route path="/aboutus" component={() => <About />}></Route>
                    <Route path="/contact" component={() => <Contact />}></Route>
                    <Route path="/register" component={() => <Register />}></Route>
                    <Redirect to="/home" />
                </Switch>
            </>
        )
    }
}

export default withRouter(Main);