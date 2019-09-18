import React from "react";

const UserCard = ({ username, email, name }) => (
  <article class="card">
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">{name}</h3>
      <div class="s-mb-2 s-main-center">
        <div class="card__teacher s-cross-center">
          <span class="small">{username}</span>
        </div>
      </div>
      <div class="s-main-center">
        <a class="button--ghost-alert button--tiny" href="#">
          {email}
        </a>
      </div>
    </div>
  </article>
);

export default UserCard;
