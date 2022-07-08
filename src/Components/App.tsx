import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Context from '../Context/Context';
import Modal from './Modal/Modal';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
  });

  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value={{isAuth, setIsAuth, setOpenModal}}>
      <BrowserRouter>
        <div className="App">
          <NavBar setOpenModal={() => setOpenModal(true)}></NavBar>
          <AppRoutes/>
          <Modal openModal={openModal} setOpenModal={() => setOpenModal(false)}></Modal>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
