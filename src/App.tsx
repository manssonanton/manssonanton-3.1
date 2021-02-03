import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.scss';

import Header from './Components/UI/Header';
import SignUp from './Components/Pages/SignUp';
import SignIn from './Components/Pages/SignIn';
import ForgorPassword from './Components/Pages/ForgottPassword';
import Home from './Components/Pages/Home';
import Dashboard from './Components/Pages/Dashboard';
import PrivateRoute from './Components/AuthRouting/PrivateRoute';
import PublicRoute from './Components/AuthRouting/PublicRoute';
import Loader from './Components/UI/Loader';
import firebase from './Firebase/config';
import { getUserById, setLoading, setNeedVerification } from './Store/actions/authActions';
import { RootState } from './Store';
import About from './Components/Pages/About';
import Gallery from './Components/Pages/Portfolio';
import Menu from './Components/Pages/Menu';
import Cursor from './Components/UI/Cursor';
import { toggleCursor } from './Store/actions/themeActions';


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state: RootState) => state.auth);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    // dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(getUserById(user.uid));

        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      // dispatch(setLoading(false));
    });
    return () => {
      unsubscribe();
    }
  }, [dispatch]);


  if (loading) {
    return <Loader />
  }

  const onHover = (hover: string) => {
    dispatch(toggleCursor(hover));
  }

  return (
    <>
      <Cursor />
      <Menu menuState={menuState} setMenuState={setMenuState} onHover={onHover} />
      <Header setMenuState={setMenuState} onHover={onHover} />
      <Switch location={location} key={location.key}>
        <Route path="/" component={Home} exact />
        <PublicRoute path="/signup" component={SignUp} exact />
        <PublicRoute path="/signin" component={SignIn} exact />
        <Route path="/about" component={About} exact />
        <Route path="/portfolio" component={Gallery} exact />
        <PublicRoute path="/forgot-password" component={ForgorPassword} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
      </Switch>
    </>
  );
}

export default App;
