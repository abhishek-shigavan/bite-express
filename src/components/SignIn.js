import { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { child } = this.props
    console.log(`Render ${child} child`)
    return (
      <div>
        <h1>Sign In Page</h1>
      </div>
    );
  };
}

export default SignIn;
