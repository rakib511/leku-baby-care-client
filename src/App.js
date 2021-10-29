
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AddData from './component/AddData/AddData';
import UpdateData from './component/Update/UpdateData';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Home/Header/Header';
import Login from './component/Login/Login/Login';
import AuthProvider from './component/context/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Service from './component/Service/Service';
import MyOrder from './component/MyOrder/MyOrder';
import ManageOrder from './component/ManageOrder/ManageOrder';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>  
          <Route exact path='/'>
            <Home></Home>
          </Route>  
          <Route exact path='/home'>
            <Home></Home>
          </Route>  
          <Route exact path='/service'>
            <Service></Service>
          </Route>  
          <Route path='/addService'>
            <AddData></AddData>
          </Route>
          <Route path='/updateData'>
            <UpdateData></UpdateData>
          </Route>
          <PrivateRoute path='/myOrder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path='/manageOrder'>
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
