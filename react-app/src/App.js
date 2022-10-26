import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllShops from './components/Shops/AllShops';
import CreateShopForm from './components/Shops/CreateShopForm';
import SingleShop from './components/Shops/SingleShop';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <NavBar loaded={loaded}/>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/users' exact={true} >
          <UsersList/>
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <Route path='/shops' exact={true} >
          <h1>My Home Page</h1>
          <AllShops />
        </Route>
        <Route path='/create-shop-form' exact={true} >
          <h1>New Shop</h1>
          <CreateShopForm />
        </Route>
        <Route path='/shops/:shopId'>
          <SingleShop />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
