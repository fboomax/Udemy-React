import "./App.css";
import { Component } from "react";
import { render } from "@testing-library/react";
import PersonComponent from "../components/Persons/Person/PersonComponent";
import PersonFun from "../components/Persons/Person/PersonFun";
import PersonsShowComponent from "../components/Persons/Persons";
import PersonsShowFunction from "../components/Persons/PersonsFun";

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
    let opposite = this.state.showPersons;
    this.setState({ showPersons: !opposite });
  };

  deleteHandler = (personID) => {
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
          <div>
            <PersonsShowComponent
              info={this.state.personsName}
              clicked={this.deleteHandler}
            />
          </div>
          <div>
            <PersonsShowFunction
              persons={this.state.personsName}
              changed={this.nameChangedHandler}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <button className="menuButton" onClick={this.togglePersonHandler}>
          Show me the money!!
        </button>
        <h1>The app to show People</h1>

        {jsxPerson}
      </div>
    );
  }
}

export default App;
