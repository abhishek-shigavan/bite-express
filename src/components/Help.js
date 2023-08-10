import { Component } from "react";
import SignIn from "./SignIn";

class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render = () => {
    return (
      <div>
        <h1>Help Page</h1>
        <h1>Mounting multiple Sign In Component below</h1>
        <SignIn child={"first"} />
        <SignIn child={"second"} />
        <SignIn child={"third"} />
      </div>
    );
  };
}

export default Help;
