import React from 'react';

function UserContactInfo({ user }) {
  return (
    <div className="card-body">
      <h5 className="card-title">{user.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6>
      <p className="card-text">{user.city}</p>
    </div>
  );
}

export default UserContactInfo;
