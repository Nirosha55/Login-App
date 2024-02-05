// import React from 'react';
// import Login from '../components/login';

// var isLoggedIn = false;

// const currentTime = new Date(2019,11,1,9).getHours();
// console.log(currentTime)


// function App() {
//   return <div className="container"> {
//       // isLoggedIn  ? <h1>Hello</h1>:<Login/>
// currentTime > 12 ? <h1>Good afternoon !!!</h1> :null
//     }
//     </div>;
//  }


// export default App;




import React from "react";
import Form from "../components/Form";

// var userIsRegistered = true;
var userIsRegistered;
function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
