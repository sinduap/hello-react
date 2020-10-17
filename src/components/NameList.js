import React from "react";
import Person from "./Person";

/*
function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      {names.map((name) => {
        return <h2>{name}</h2>;
      })}
    </div>
  );
}
*/

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  const personLists = persons.map((person, i) => {
    return <Person person={person} key={i} />;
  });

  return <div>{personLists}</div>;
}

export default NameList;
