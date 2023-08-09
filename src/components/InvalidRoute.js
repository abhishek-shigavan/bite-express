import { Link, useRouteError } from "react-router-dom";

const InvalidRoute = () => {
  const routeErr = useRouteError();
  console.log(routeErr);
  return (
    <div className="invalid-route-cnt">
      <span>You have taken wrong route</span>
      <span>
        {routeErr.error.message} : {routeErr.status}
      </span>
      <span>Plz click <Link to={"/"}>Go to home</Link></span>
    </div>
  );
};

export default InvalidRoute;
