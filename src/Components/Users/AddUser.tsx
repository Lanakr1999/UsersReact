import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { IUser } from './IUser';
import http from '../../http';
import { initialValue } from './InitialValue';

const AddUser = ({ users, setUsers }: { users: IUser[], setUsers: Dispatch<SetStateAction<IUser[]>> }) => {

  const[value, setValue] = useState(initialValue);

  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post('users', value).then(res => {
      console.log(res.data);
      setUsers([...users, res.data]);
      setValue(initialValue);
    }).catch(err => {
      console.log(err);
    })
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field: string = event.target.id;
    setValue({...value, [field]: event.target.value})
  }

  return (
    <form className='col-3 m-auto' onSubmit={((event) => addUser(event))}>
      {Object.keys(initialValue).map(field =>
        <div className="mb-3" key={field}>
          <label htmlFor={field} className="form-label">{field}</label>
          <input type="text"
                 className="form-control"
                 placeholder={`Input user ${field}`}
                 onChange={(event) => onChange(event)}
                 value={value[field as keyof Omit <IUser, 'id' | 'address' | 'company'>]}
                 id={field}/>
        </div>
      )}
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default AddUser;