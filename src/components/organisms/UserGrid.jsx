import React from "react";
import UserCard from "../molecules/UserCard";
import widthLoader from "../HOC/widthLoader";
const UserGrid = ({ users }) => (
  <div className="ed-grid m-grid-3 l-grid-4">
    {users.map(u => (
      <UserCard id={u.id} name={u.name} username={u.username} email={u.email} />
    ))}
  </div>
);

export default widthLoader("users")(UserGrid);
