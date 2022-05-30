import './App.css';
import {Suspense, lazy} from "react"
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';

const NotFound =lazy(()=> import ('./pages/not-found.js'));
const Dashboard =lazy(()=> import ('./pages/dashboard'));
const Login =lazy(()=> import ('./pages/login'));
const Signup =lazy(()=> import ('./pages/signup'));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route exact path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
          <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}/>
          <Route exact path={ROUTES.LOGIN} element={<Login/>}/>
          <Route exact path={ROUTES.SIGNUP} element={<Signup/>}/>
          <Route exact path="/" element={<Dashboard/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
