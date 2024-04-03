import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context";
const AddUser = () => {
  const { dispatchUserEvent } = useContext(MyContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [bio, setBio] = useState("");
  const handleAddUser = () => {
    const user = { id: Math.random(), name, age, bio };
    dispatchUserEvent("ADD USER", { newUser: user });
  };
  return (
    <>
      <h1>Add User</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ margin: "1rem" }}>
          {" "}
          <input
            type="text"
            placeholder="enter user"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <input
            type="text"
            placeholder="enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <textarea
            type="text"
            onChange={(e) => setBio(e.target.value)}
            placeholder="bio"
            value={bio}
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <button className="btn1" onClick={handleAddUser}>
            Add user
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
