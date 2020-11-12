import React, { useState } from "react";
import DishForm from "./DishForm";

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);

  return (
    <div>
      {isToggled ? (
        <DishForm setToggled={setToggled} />
      ) : (
        <button onClick={() => setToggled(!isToggled)}>Open</button>
      )}
    </div>
  );
};

export default Toggle;

// import React, { Component } from "react";

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }
