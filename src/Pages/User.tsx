import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import http from '../http';
import { IUser } from '../Components/Users/IUser';
import { initialValue } from '../Components/Users/InitialValue';

const User = () => {
  const[user, setUser] = useState<IUser>(initialValue);
  const {id} = useParams();
  console.log(id)
  const getUser = () => {
    http.get(`users/${id}`).then(res => {
      setUser(res.data);
    })
  }
  useEffect( () => {
    getUser();
  }, []);

  const updateUser = (id?: number) => {
    const data = {
      name: 'Bob',
      username: 'Mister',
      email: 'mister_bobs',
      phone: '345mister_bob',
      website: 'bobIs_mister'
    }
    http.put(`users/${id}`, data).then(res => {
      setUser(res.data);
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.username}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{user.email}</small>
        </div>
        <div className="card-footer">
          <small className="text-muted">{user.website}</small>
        </div>
        <div className="card-footer">
          <small className="text-muted">{user.phone}</small>
        </div>
        <button className='btn btn-primary mt-2 mb-5 mx-3' onClick={() => updateUser(user.id)}>Update user</button>
      </div>
    </div>
  );
};

export default User;