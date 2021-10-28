
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AddData from './component/AddData/AddData';
import UpdateData from './component/Update/UpdateData';
import Delete from './component/Delete/Delete';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Home/Header/Header';
import Login from './component/Login/Login/Login';
import AuthProvider from './component/context/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';

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
          <Route path='/addData'>
            <AddData></AddData>
          </Route>
          <Route path='/updateData'>
            <UpdateData></UpdateData>
          </Route>
          <PrivateRoute path='/deleteData'>
            <Delete></Delete>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
