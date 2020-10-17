import React from "react";

// DEFAULT EXPORT
const Greet = (props) => {
  return (
    <div>
      <h1>
        Greet {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

/*
DESTRUCTURING IN THE PARAMETER
const Greet = ({ name, heroName, children }) => {
  return (
    <div>
      <h1>
        Greet {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};
*/

/*
DESTRUCTURING IN THE FUNCTION BODY
const Greet = (props) => {
  const { name, heroName, children } = props
  return (
    <div>
      <h1>
        Greet {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};
*/

export default Greet;

// NAME EXPORT
// export const Greet = () => {
//   return <div>Hello Sindu</div>;
// };
