import React, { useEffect, useState } from 'react';
import UserCards from '../Components/Users/UserCards';
import { IUser } from '../Components/Users/IUser';
import http from '../http';
import Spinner from '../Components/Spinner/Spinner';
import AddUser from '../Components/Users/AddUser';
import { useSearch } from '../Hooks/UseSearch';
import SearchUser from '../Components/Users/SearchUser';

const Users = () => {

  const[showUserForm, setShowUserForm] = useState(false);
  const[users, setUsers] = useState<IUser[]>([]);
  const[searchedValue, setSearchedValue] = useState('');
  const searchedUsers = useSearch(users, searchedValue);

  useEffect( () => {
    getUsers();
  }, []);

  const getUsers = () => {
    http.get('users').then(res => {
      setUsers(res.data);
    })
  };

  const onDelete = (id?: number) => {
    http.delete(`users/${id}`).then(res => {
      const isDelete = confirm('Really want to delete this user?');
      if (isDelete) {
        setUsers(users.filter((user) => user.id !== id));
      }
    })

  }

  const updateUsers = (id?: number) => {
    const data = {
      name: 'Bob',
      username: 'Mister',
      email: 'mister_bobs',
      phone: '345mister_bob',
      website: 'bobIs_mister'
    }
    http.put(`users/${id}`, data).then(res => {
      setUsers(users.map((user) => user.id === res.data.id ? res.data : user));
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>Users</h1>
        <SearchUser setSearchedValue={setSearchedValue} searchedValue={searchedValue}></SearchUser>
      <button className='btn btn-success mt-2 mb-5 mx-3' onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
    {
      showUserForm && <AddUser users={users} setUsers={setUsers}/>
    }
      {
        users.length
          ?
            <UserCards users={searchedUsers} onDelete={onDelete} updateUsers={updateUsers}></UserCards>
          : <Spinner/>
      }
    </div>
  );
};

export default Users;