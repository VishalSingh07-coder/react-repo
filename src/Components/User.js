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
        <div style={{textAlign:"center",border:"1px solid lightgray",padding:"1rem",borderRadius:"10px"}}>
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        <h3>Bio: {user.bio}</h3>
        <button className="btn" onClick={handleRemoveuser}>Delete user</button>
        </div>
      </div>
    </>
  );
};

export default User;
