
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from './component/NotFound/NotFound';
import Header from './component/Home/Header/Header';
import Login from './component/Login/Login/Login';
import AuthProvider from './component/context/AuthProvider';


import Registration from './component/Login/Registration/Registration';
import MyOrder from './component/MyOrder/MyOrder';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Products from './component/Products/Products';
import MoreProducts from './component/MoreProducrs/MoreProducts';
import Details from './component/Details/Details';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {/* <Header></Header> */}
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/moreProducts'>
              <Header></Header>
              <MoreProducts></MoreProducts>
            </Route>
            <PrivateRoute exact path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/details/:productId'>
              <Details></Details>
            </PrivateRoute>


            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
