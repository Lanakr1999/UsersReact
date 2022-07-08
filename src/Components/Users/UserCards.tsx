import React from 'react';
import { IUser } from './IUser';
import { Link } from 'react-router-dom';

const UserCards = (
  {
    users,
    onDelete,
    updateUsers,
  }:
    {
      users: IUser[],
      onDelete: (id?: number) => void,
      updateUsers: (id?: number) => void,
    }) => {

      return (
        <div className='container mt-5'>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {users.length && users.map(user => <div className="col mb-5" key={user.name}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link className="nav-link" to={`${user.id}`}>
                      {user.name}
                    </Link>
                  </h5>
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
              </div>
              <button  className="btn btn-danger mt-2 mb-5 mx-3" onClick={() => onDelete(user.id)}>Delete</button>
              <button className='btn btn-primary mt-2 mb-5 mx-3' onClick={() => updateUsers(user.id)}>Update user</button>
            </div>
              )
            }
          </div>
        </div>
      );
};

export default UserCards;