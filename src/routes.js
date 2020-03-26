import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profiler from './pages/Profiler';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                
                <Route path="/profiler" component={Profiler} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;