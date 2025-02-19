import React from 'react';
import { useState, useEffect } from 'react';
import Characters from './components/Characters/Characters'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import { FilterProvider} from './context/FilterContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 const Protected = ({ children }) => (
   <>

        <FilterProvider>

          <NavBar />
          {children}

        </FilterProvider>

   </>
 );


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>

       <Routes>
          
          <Route path="/" element={<Register />} />
          
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route path="/characters" element={<Protected > <Characters /> </ Protected > } />

          <Route path='/favorite' element={isAuthenticated ? <Protected > <Favorite /> </ Protected > : <Login onLogin={handleLogin}/> } />

          <Route path='/character/:id' element= { <Protected > <CharacterDetail /> </ Protected >  } />

        </Routes>

    </BrowserRouter>
  );
}

export default App;
