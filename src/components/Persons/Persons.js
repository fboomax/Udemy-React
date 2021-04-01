import React from "react";
import PersonComponent from "./Person/PersonComponent";

const PersonsShowComponent = (props) => {
  console.log("[Persons.js] rendering");
  return props.info.map((person, index) => {
    return (
      <PersonComponent
        info={person}
        click={() => props.clicked(index)}
        key={person.id}
      />
    );
  });
};

export default PersonsShowComponent;
