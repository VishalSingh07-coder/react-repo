import React from "react";
import { useContext } from "react";
import { MyContext } from "../context";
const User = ({ user }) => {
    const{dispatchUserEvent}=useContext(MyContext);
    const handleRemoveuser=()=>{
        dispatchUserEvent("REMOVE USER",{userId:user.id})
    }
  return (
    <>
      <div className="User">
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h3>{user.bio}</h3>
        <button className="btn" onClick={handleRemoveuser}>Delete user</button>
      </div>
    </>
  );
};

export default User;
