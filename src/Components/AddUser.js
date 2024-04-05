import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context";
const AddUser = () => {
  const { dispatchUserEvent } = useContext(MyContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [bio, setBio] = useState("");
  const[err,setError]=useState(false);
  const handleAddUser = () => {
    if(name==="" || age==="" || bio===""){
        setError(true);
    }
    else{
    setError(false);
    const user = { id: Math.random(), name, age, bio };
    dispatchUserEvent("ADD USER", { newUser: user });
    setName("");
    setAge("");
    setBio("");
    }
  };
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <h1 style={{backgroundColor:"blue",color:"white",textAlign:"center",borderRadius:"6px",padding:"10px"}}>Add User</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="inputDiv">
        <div style={{ margin: "1rem"}}>
          <input
            type="text"
            placeholder="enter user"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="Name"
          />
          {err ?<span style={{color:"red"}}> Require Field !!</span>:""}
        </div>
        <div style={{ margin: "1rem" }}>
          <input
            type="text"
            placeholder="enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="age"
          />
          {err ?<span style={{color:"red"}}> Require Field !!</span>:""}
        </div>
        </div>
        <div style={{ margin: "1rem" }}>
          <textarea
            type="text"
            onChange={(e) => setBio(e.target.value)}
            placeholder="bio"
            value={bio}
            className="bio"
          />
          {err ?<span style={{color:"red"}}> Require Field !!</span>:""}
        </div>
        <div style={{ margin: "1rem",display:"flex", justifyContent:"space-evenly" }}>
            <div>
          <button className="btn1" onClick={handleAddUser}>
            Add user
          </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddUser;
