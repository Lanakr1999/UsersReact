import React, {  useState } from 'react';
import { IUser } from '../../Users/IUser';

interface IProps {
  users: IUser[],
  name: string
}

const ButtonDeleteUser = ({ users, name }: IProps) => {

  const[deletedUser, setDeletedUser] = useState(users);

  const onDelete = (name: string) => {
    setDeletedUser(deletedUser.filter((user) => user.name !== name));
  }

  return (
    <button onClick={() => onDelete(name)}>Delete user</button>
  );
}

export default ButtonDeleteUser;