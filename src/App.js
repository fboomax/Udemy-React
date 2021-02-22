import "./App.css";
import { Component } from "react";
import { render } from "@testing-library/react";
import PersonComponent from "./Person/PersonType";
import PersonFun from "./Person/PersonFun";

class App extends Component {
  state = {
    personsName: [
      { id: "aa", name: "Foivos", age: 28 },
      { id: "bb", name: "Evi", age: 27 },
    ],
    numClick: 0,
    showPersons: false,
  };

  switchNameHandler = (newName, newAge) => {
    console.log("CLICKED!!");
    this.setState({
      personsName: [
        {
          name: newName,
          age: newAge,
        },
        {
          name: "Evaggelia",
          age: 37,
        },
      ],
    });
    // console.log(this.state.personsName);
  };
  nameChangedHandler = (event, index) => {
    console.log("CHANGED!!");
    // console.log(event);
    // console.log("end event");

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
    // let person = Object.assign({}, this.state.personsName.[personIndex])
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
    // console.log(this.state.showPersons);
    // console.log(this.state.personsName);

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
            // console.log("PerosnFun main");
            // console.log(person);
            return (
              <PersonFun
                info={person}
                click={() => this.switchNameHandler("KING", 37)}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
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
        <h1>The app to show People</h1>
        {jsxPerson}
      </div>
    );
  }
}

export default App;

// togglePersonHandler = (numClick) => {
//   console.log("Click!!");
//   console.log(numClick);
//   this.setState({
//     numClick: numClick + 1,
//   });

//   if (numClick % 2 == 0) {
//     this.setState({
//       showPersons: true,
//     });
//   } else {
//     this.setState({
//       showPersons: false,
//     });
//   }

//   console.log(this.state.showPersons);
// };

// import "./App.css";
// import { useState } from "react";
// import { render } from "@testing-library/react";
// import PersonComponent from "./Person/PersonType";
// import PersonFun from "./Person/PersonFun";

// const App = () => {
//   const [arrayName, setArrayName] = useState({
//     personsName: [
//       { name: "Foivos", age: 28 },
//       { name: "Evi", age: 27 },
//     ],
//   });

//   const [arrayNameAdding, setArrrayNameAdding] = useState({
//     otherState: "is OK",
//   });

//   const switchNameHandler = () => {
//     console.log("CLICKED!!");

//     setArrayName({
//       personsName: [
//         { name: "Fanourios", age: 28 },
//         { name: "Evaggelia", age: 27 },
//       ],
//     });

//     setArrrayNameAdding({
//       otherState: "is still OK",
//     });

//     // console.log("switchNameHandler Function ");
//     // console.log(arrayName.personsName[1].name);
//     // console.log(arrayName.personsName[0].name);
//     // console.log(arrayName);
//   };

//   const arrayMerging = { ...arrayName, ...arrayNameAdding };
//   console.log("App arrayName ");
//   console.log(arrayMerging);
//   return (
//     <div className="App">
//       <button onClick={switchNameHandler}>Change Name</button>
//       <h1>To App pou arxizw kai katalavainw</h1>
//       <PersonComponent info={arrayName.personsName[1]} />
//       <PersonFun info={arrayName.personsName[0]} />
//     </div>
//   );
// };

// export default App;
