import React, { createElement } from "react";

const Hello = () => {
  // Without JSX
  return React.createElement(
    "div",
    { id: "id_hello", className: "class_hello" },
    React.createElement("h1", null, "Hello Sindu")
  );

  // With JSX
  //   return (
  //     <div id="id_hello" className="class_hello">
  //       <h1>
  //         Hello Sindu
  //       </h1>
  //     </div>
  //   );
};

export default Hello;
