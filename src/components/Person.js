import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>{`Hello my name is ${person.name}, I'm ${person.age} years old, and I know ${person.skill}`}</h2>
    </div>
  );
}

export default Person;
