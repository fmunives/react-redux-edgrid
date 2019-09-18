import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      email: ""
    };

    this.setEmail = this.setEmail.bind(this);
    this.setName = this.setName.bind(this);
  }

  setName(u) {
    this.setState({
      user: u.target.value
    });
  }
  setEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  render() {
    return (
      <form action="" className="ed-grid m-grid-2">
        <div className="">
          <label htmlFor="">Ingresa tu usuario</label>
          <input type="text" onChange={this.setName} />
        </div>
        <div className="">
          <label htmlFor="">Ingresa tu email</label>
          <input type="text" onChange={this.setEmail} />
        </div>
        <h3>Tu user es: {this.state.user} </h3>
        <h3>Tu correo es: {this.state.email} </h3>
      </form>
    );
  }
}

export default Form;
