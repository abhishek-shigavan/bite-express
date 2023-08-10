import { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(
      `Mounted ${
        this.props.child ? this.props.child + " child" : "signin component"
      }`
    );
  }

  render = () => {
    const { child } = this.props;
    console.log(`Render ${child ? child + " child" : "signin component"}`);
    return (
      <div>
        <h1>Sign In Page</h1>
      </div>
    );
  };
}

export default SignIn;
