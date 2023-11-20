import './App.css';
import { Home,About,Contact } from './components/index';
import { Route, Routes } from 'react-router-dom';
import {Navbar,Footer} from './containers/index';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/aboutus' element = {<About/>} />
        <Route path='/contactus' element = {<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
