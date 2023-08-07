import { HEADER_LOGO } from "../utils/config";

const HeaderComponent = () => {
  return (
    <div id="headerCnt" className="header-cnt">
      <div id="logo" className="header-logo">
        <img
          className="header-logo-img"
          src={HEADER_LOGO}
          alt="Bite Express"
        />
      </div>
      <div id="headerOptions" className="header-options">
        <ul>
          <li>
            <h1>Home</h1>
          </li>
          <li>
            <h1>Offers</h1>
          </li>
          <li>
            <h1>Cart</h1>
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