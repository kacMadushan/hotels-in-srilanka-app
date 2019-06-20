import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import AddHotelPage from '../components/AddHotelPage';
import NotFound from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/add" component={AddHotelPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;