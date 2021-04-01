import React from "react";
import PersonComponent from "./Person/PersonComponent";


const PersonsShowComponent = (props) =>
  props.info.map((person, index) => {
    return (
      <PersonComponent
        info={person}
        click={() => props.clicked(index)}
        key={person.id}
      />
    );
  });



export default PersonsShowComponent;
