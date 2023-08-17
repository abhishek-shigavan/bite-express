import { Component } from "react";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
          {({loggedUser, setUserName}) => {
            return <input placeholder="Type here to change UserName" onChange={(e) => setUserName(e.target.value)}/>
          }}
        </UserContext.Consumer>
      </div>
    );
  };
}

export default SignIn;
