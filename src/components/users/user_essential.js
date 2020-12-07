import React from 'react';
import UserContactInfo from './user_contact_info';

function UserEssential(props) {
  return (
    <div className={props.wrapperClass || 'col'}>
      <div className="card mb-3">
        <img src="https://picsum.photos/200" className="card-img-top" />
        <UserContactInfo user={props.user} />
      </div>
    </div>
  );
}

export default UserEssential;
