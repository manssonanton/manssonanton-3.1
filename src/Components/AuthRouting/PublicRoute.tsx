import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../Store';

interface Props extends RouteProps {
    component: any;
}

function PublicRoute({ component: Componenet, ...rest }: Props) {
    const { authenticated } = useSelector((state: RootState) => state.auth);

    return (
        <Route {...rest} render={props => !authenticated ? <Componenet {...props} /> : <Redirect to="/dashboard" />} />
    );
}

export default PublicRoute;