import React, { useState } from 'react';


const ButtonAddUsers = () =>{
  const[showUserForm, setShowUserForm] = useState(false);
  return (
    <button className='btn btn-success mt-2 mb-5' onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
  );
}

export default ButtonAddUsers;