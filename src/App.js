import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

import Home from "./components/Home"
import Lobby from "./components/Lobby"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import {Layout} from 'antd';
import './App.css';
import LinkMenu from "./components/linkMenu";
import SignOut from "./components/SignOut";
import {withAuthentication} from "./components/Session";

const {Header, Content, Footer, Sider} = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        // this.state ={'activeKey'=routing}
    }

    render() {


        return (

            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{"height": "140px"}}>
                            <img src="icse2020-logo.png" width="800px" className="App-logo" alt="logo"/>
                        </Header>
                        <Layout>
                            <Sider>
                                <LinkMenu/>
                            </Sider>
                            <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                                <div className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/lobby" component={withAuthentication(Lobby)}/>
                                    <Route exact path="/signup" component={withAuthentication(SignUp)}/>
                                    <Route exact path="/signin" component={withAuthentication(SignIn)}/>
                                    <Route exact path="/signout" component={withAuthentication(SignOut)}/>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

export default withAuthentication(App);
