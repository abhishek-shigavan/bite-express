import { useRouteError } from "react-router-dom";

const InvalidRoute = () => {
  const routeErr = useRouteError();
  console.log(routeErr);
  return (
    <div className="invalid-route-cnt">
      <span>You have taken wrong route</span>
      <span>
        {routeErr.error.message} : {routeErr.status}
      </span>
    </div>
  );
};

export default InvalidRoute;
