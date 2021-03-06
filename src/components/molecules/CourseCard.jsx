import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../../redux/actionCreator";

const CourseCard = ({
  id,
  title,
  image,
  image_level,
  level,
  price,
  addCourseToCart,
  cart,
  removeCourseFromCart
}) => (
  <article class="card">
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">{title}</h3>
      <div class="s-mb-2 s-main-center">
        <div class="card__teacher s-cross-center">
          <div class="card__avatar s-mr-1">
            <div class="circle img-container">
              <img src={image_level} alt={title} />
            </div>
          </div>
          <span class="small">{level}</span>
        </div>
      </div>
      <div class="s-main-center">
        {cart.find(buscado => buscado === id) ? (
          <button
            class="button--ghost-alert button--tiny"
            onClick={() => removeCourseFromCart(id)}
          >
            Remover
          </button>
        ) : (
          <button
            class="button--ghost-alert button--tiny"
            onClick={() => addCourseToCart(id)}
          >
            {`S/. ${price}.00`}
          </button>
        )}
      </div>
    </div>
  </article>
);

const mapStateToProps = state => ({
  cart: state.reducerCart.cart
});

const mapDispatchToProps = dispatch => ({
  addCourseToCart(id) {
    dispatch(addToCart(id));
  },
  removeCourseFromCart(id) {
    dispatch(removeToCart(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseCard);
