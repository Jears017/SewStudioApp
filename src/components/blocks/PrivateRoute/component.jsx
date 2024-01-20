// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Route, Navigate } from "react-router-dom";
// import { Spinner } from "./Preloader";

// import { auth } from "../../../firebase";

// const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
//   try {
//     const [user, loading] = useAuthState(auth);

//     if (loading) {
//       return <Spinner />;
//     }

//     return (
//       <Route
//         {...rest}
//         render={(routeProps) =>
//           user ? <RouteComponent {...routeProps} /> : <Navigate to={'/not-authorized'} replace/>
//         }
//       />
//     );
//   } catch (e) {
//     return <Navigate to={'/fatal-error-page'}/>
//   }
// };

// export default PrivateRoute

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = () => {
  const [user] = useAuthState(auth);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
