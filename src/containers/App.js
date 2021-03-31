import "./App.css";
import { Component } from "react";
import { render } from "@testing-library/react";
import PersonComponent from "../components/Persons/Person/PersonComponent";
import PersonFun from "../components/Persons/Person/PersonFun";

class App extends Component {
  state = {
    personsName: [
      { id: "aa", name: "Foivos", age: 28 },
      { id: "bb", name: "Evi", age: 27 },
    ],
    numClick: 0,
    showPersons: false,
  };

  nameChangedHandler = (event, index) => {
    console.log("CHANGED!!");

    let personIndex = this.state.personsName.findIndex((p) => {
      return p.id === index;
    });

    let changePersonByIdObject = {
      ...this.state.personsName[personIndex],
    };
    changePersonByIdObject.name = event.target.value;
    const newPersonsName = [...this.state.personsName];
    newPersonsName[personIndex] = changePersonByIdObject;
    this.setState({ personsName: newPersonsName });
  };

  togglePersonHandler = () => {
    // console.log("Click!!");
    let opposite = this.state.showPersons;
    this.setState({ showPersons: !opposite });
    // console.log(this.state.showPersons);
  };

  deleteHandler = (personID) => {
    // let tempPersonsName = this.state.personsName.slice();
    let tempPersonsName = [...this.state.personsName];
    console.log("delete");
    console.log(tempPersonsName);
    tempPersonsName.splice(personID, 1);
    this.setState({ personsName: tempPersonsName });
  };

  render() {
    let jsxPerson = null;

    if (this.state.showPersons) {
      jsxPerson = (
        <div>
          {this.state.personsName.map((person, index) => {
            // console.log(person);
            return (
              <PersonComponent
                info={person}
                click={() => this.deleteHandler(index)}
                key={person.id}
              />
            );
          })}

          {this.state.personsName.map((person) => {
            return (
              <PersonFun
                info={person}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    let classCss = [];

    if (this.state.personsName.length == 2) {
      classCss.push("red");
    }
    if (this.state.personsName.length == 0) {
      classCss.push("unbold");
    }
    return (
      <div className="App">
        <button
          className="menuButton"
          // onClick={() => this.togglePersonHandler(this.state.numClick)}
          onClick={this.togglePersonHandler}
        >
          Show me the money!!
        </button>
        <h1 className={classCss.join(" ")}>The app to show People</h1>
        {jsxPerson}
      </div>
    );
  }
}

export default App;
