import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/config";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div id="headerCnt" className="flex justify-between items-center mx-3 my-2">
      <div id="logo" className="hover:cursor-pointer w-[100px] h-[100px]">
        <img className="rounded-lg" src={HEADER_LOGO} alt="Bite Express" />
      </div>
      <div id="headerOptions">
        <ul className="flex justify-between px-2">
          <li className="px-2">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <h1>
              <Link to={"/"}>
                Home
              </Link>
            </h1>
          </li>
          <li className="px-2">
            <h1>
              <Link to={"/offers"}>
                Offers
              </Link>
            </h1>
          </li>
          <li className="px-2">
            <h1>
              <Link to={"/cart"}>
                Cart
              </Link>
            </h1>
          </li>
          <li className="px-2">
            <h1>
              <Link to={"/help"}>
                Help
              </Link>
            </h1>
          </li>
          <li className="px-2">
            <h1>
              <Link to={"/grocery"}>
                Grocery
              </Link>
            </h1>
          </li>
          <li className="px-2">
            <h1>
              <Link to={"/signin"}>
                SignIn
              </Link>
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
