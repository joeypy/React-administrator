import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Page from '../pages/Index.d';

const Routes = () => {
    return (
        <Switch>
            <Route path="/react-admin/" exact component={ Page.Dashboard }/>
            <Route path="/react-admin/customers" component={ Page.Customers }/>
            <Route path="/react-admin/products" component={ Page.Products }/>
            <Route path="/react-admin/orders" component={ Page.Orders }/>
            <Route path="/react-admin/analytics" component={ Page.Analytics }/>
            <Route path="/react-admin/categories" component={ Page.Categories }/>
            <Route path="/react-admin/discount" component={ Page.Discount }/>
            <Route path="/react-admin/inventory" component={ Page.Inventory }/>
            <Route path="/react-admin/settings" component={ Page.Settings }/>
        </Switch>
    )
}

export default Routes
