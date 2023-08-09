import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/config";

const HeaderComponent = () => {
  return (
    <div id="headerCnt" className="header-cnt">
      <div id="logo" className="header-logo">
        <img className="header-logo-img" src={HEADER_LOGO} alt="Bite Express" />
      </div>
      <div id="headerOptions" className="header-options">
        <ul>
          <li>
            <h1><Link className="route-link" to={"/"}>Home</Link></h1>
          </li>
          <li>
            <h1>
              <Link className="route-link" to={"/offers"}>Offers</Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link className="route-link" to={"/cart"}>Cart</Link>
            </h1>
          </li>
          <li>
            <h1>Account</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
