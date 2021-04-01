import React from "react";
import PersonFun from "./Person/PersonFun";

const PersonsShowFunction = (props) =>
  props.persons.map((person) => {
    return (
      <PersonFun
        info={person}
        key={person.id}
        change={(event) => props.changed(event, person.id)}
      />
    );
  });

export default PersonsShowFunction;
