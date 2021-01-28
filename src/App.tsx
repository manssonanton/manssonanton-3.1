import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { AnimatePresence, motion } from 'framer-motion';

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


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));

        if (!user.emailVerified) {
          await dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    }
  }, [dispatch]);

  if (loading) {
    return <Loader />
  }

  const containerVariants = {
    hidden: {
        // opacity: 0,
        x: '100vw',
    },
    visible: {
        // opacity: 1,
        x: '0vw',
        transition: { ease: 'easeInOut', delay: 0.2, duration: 0.5 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut', delay: 0.5, duration: 0.5 }
    }
}

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div className=""
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
        <Header />
        <Switch location={location} key={location.key}>
          <Route path="/" component={Home} exact />
          <PublicRoute path="/signup" component={SignUp} exact />
          <PublicRoute path="/signin" component={SignIn} exact />
          <Route path="/about" component={About} exact />
          <Route path="/portfolio" component={Gallery} exact />
          <PublicRoute path="/forgot-password" component={ForgorPassword} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
