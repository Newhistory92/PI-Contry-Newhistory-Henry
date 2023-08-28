
import { Routes, Route } from 'react-router-dom';
import LandingPage from './view/landing/LandingPage';
import Home from './view/home/Home';
import FormActivity from './view/form/FormActivity';
import DetailCountries from './view/detail/DetailCountries';
import Error404 from './view/404/Error404';
import Nav from './component/nav/Nav';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div>
       {location.pathname !== '/' && <Nav /> }  
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/activity' element={<FormActivity />}></Route>
        <Route path='/detail/:id' element={<DetailCountries />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;