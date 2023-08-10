import { Component } from "react";
import SignIn from "./SignIn";

class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Initial Counter : ", this.state.count)
    console.log("Mounted parent component")
  }

  componentDidUpdate() {
    console.log("Counter : ", this.state.count)
  }

  render = () => {
    console.log("Parent rendered")
    return (
      <div>
        <h1>Help Page</h1>
        <h1>Mounting multiple Sign In Component below</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Counter
        </button>
        <SignIn child={"first"} />
        <SignIn child={"second"} />
        <SignIn child={"third"} />
      </div>
    );
  };
}

export default Help;
