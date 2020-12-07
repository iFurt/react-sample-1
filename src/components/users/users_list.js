import React from 'react';
import UserEssential from './user_essential';

function UsersList({ users }) {
  return (
    <div className="row">
      { users.map(u => <UserEssential user={u} wrapperClass="col-sm-4" />) }
    </div>
  );
}

export default UsersList;
