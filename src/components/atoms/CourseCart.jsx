import React from "react";
import { connect } from "react-redux";

const CourseCart = ({ cartLength }) => (
  <li>
    <button className="button tiny ghost">Carrito: {cartLength.length} </button>
  </li>
);

const mapStateToProps = state => ({
  cartLength: state.reducerCart.cart
});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseCart);
