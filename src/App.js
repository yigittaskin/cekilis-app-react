import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import GenelCekilis from './GenelCekilis';
import KisiselCekilis from './KisiselCekilis';
import Home from './Home';
import Login from './Login';
import Footer from './Footer';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      }
      else {
        setUser(null);
      }
    })
  }, [])

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user ? <Home user={user} /> : <Login setUser={setUser} />} />
            <Route path='/genelcekilis' element={<GenelCekilis user={user} />} />
            <Route path='/kisiselcekilis' element={<KisiselCekilis user={user} />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
