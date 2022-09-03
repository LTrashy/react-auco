import React from "react";
import { useNavigate } from "react-router-dom";

const UserItem = ({ user }) => {
  //   console.log(props);
  const navigate = useNavigate();
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-img-top">
          <img src={user.avatar} alt="Card image cap" />
        </div>
        <div className="card-body">
          <p className="card-text">
            Email: <strong>{user.email}</strong>
            <br></br>
            First Name: <strong>{user.first_name}</strong>
            <br></br>
            Last Name: <strong>{user.last_name}</strong>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
