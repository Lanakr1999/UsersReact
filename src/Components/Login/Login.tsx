import React, { FormEvent, useContext, useState } from 'react';
import http from '../../http';
import Context from '../../Context/Context';


const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuth, setOpenModal } = useContext(Context);
  const JSON_URL = 'https://fakestoreapi.com/auth/login'

  const loginData = {
    username: 'mor_2314',
    password: '83r5^_',
  }
  const getUserName = (value: string) => {
    setUserName(value);
    console.log(value);
  }
  const getPassword = (value: string) => {
    setPassword(value);
  }


  //username: 'mor_2314'
  //password: '83r5^_'

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post(JSON_URL, loginData).then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token)
      setIsAuth(true);
    })
    setOpenModal(false);
  }
  return (
    <form className='col-3 m-auto' onSubmit={(event) => login(event)}>
        <div className="mb-3">
          <label className="form-label"></label>
          <input type="text"
                 className="form-control"
                 placeholder={`mor_2314 `}
                 onChange={(event) => getUserName(event.target.value)}
          />
          <input type="text"
                 className="form-control"
                 placeholder={`83r5^_`}
                 onChange={(event) => getPassword(event.target.value)}/>
          <button className='btn btn-primary'

          >Login</button>
        </div>
    </form>
  );
};

export default Login;

