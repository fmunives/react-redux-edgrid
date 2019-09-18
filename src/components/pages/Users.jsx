import React from "react";
import UserGrid from "../organisms/UserGrid";
import { connect } from "react-redux";

const Users = ({ users }) => {
  console.log(users);

  return <UserGrid users={users} />;
};

const mapStateToProps = state => ({
  users: state.reducerUsers.users
});

export default connect(
  mapStateToProps,
  {}
)(Users);
