// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route, 
//   Redirect
// } from "react-router-dom";

// function PrivateRoute({ component: Component, ...rest }) {
//   let session = window.sessionStorage.getItem('user')
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         session.  ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
