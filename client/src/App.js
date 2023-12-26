import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';


import Header from './componet/Header';
import PrivateRoute from './componet/PrivateRoute';

function App() {
  return (
    
    <BrowserRouter>
     <Header/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
        <Route path='/sign_up' element={<SignUp/>}/>
        <Route path='/sign_in' element={<SignIn/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
