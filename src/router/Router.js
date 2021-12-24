import React from 'react';
import {BrowserRouter as WebRouter, Redirect, Route, Switch} from "react-router-dom";
import history from './history';
import LayoutManager from "../layouts/LayoutManager";
import AuthLoader from "../services/auth/AuthLoader";
import IsAuth from "../services/auth/IsAuth";
import IsGuest from "../services/auth/IsGuest";
import HasAccess from "../services/auth/HasAccess";
import ForbiddenPage from "../modules/auth/pages/ForbiddenPage";
import NotFoundPage from "../modules/auth/pages/NotFoundPage";
import LoginPage from "../modules/auth/pages/LoginPage";
import ListPage from "../modules/settings/pages/module/ListPage";
import TestPage from "../modules/auth/pages/TestPage";


const Router = () => {
    return (
        <WebRouter history={history}>
            <AuthLoader>
                <LayoutManager>
                    <IsAuth>
                            <HasAccess>
                                {({userCan,modules,departments,pages,permissions}) => (
                                    <Switch>
                                        <Route path={'/'} exact
                                               render={() => !userCan(pages, 'home') ? <ListPage/> : <ForbiddenPage/>}/>

                                        <Route path={'/404'} exact component={NotFoundPage}/>
                                        <Redirect to={'/404'}/>
                                    </Switch>
                                )
                                }
                            </HasAccess>
                    </IsAuth>
                    <IsGuest>
                        <Switch>
                            <Route path={'/auth'} exact component={LoginPage}/>
                            <Route path={'/test'} exact component={TestPage}/>
                            <Route path={'/'} exact component={ListPage}/>
                            <Redirect to={'/auth'}/>
                        </Switch>
                    </IsGuest>
                </LayoutManager>
            </AuthLoader>
        </WebRouter>
    );
};

export default Router;
