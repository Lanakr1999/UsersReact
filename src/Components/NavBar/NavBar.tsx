import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/Context';

const NavBar = ({ setOpenModal }: { setOpenModal: Dispatch<SetStateAction<boolean>>}) => {
  const { isAuth, setIsAuth } = useContext(Context);

  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            { isAuth
              ?
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='users'>User</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="posts">Posts</Link>
                  </li>
                </ul>
                <button className='btn btn-primary' onClick={() => logout()}>Logout</button>
              </>
              :
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link className="nav-link" to="posts">Posts</Link>
                  </li>
                </ul>
                <button className='btn btn-primary' onClick={() => setOpenModal(true)}>Login</button>
              </>
            }
        </div>
      </div>
    </nav>
  );
};

export default NavBar;