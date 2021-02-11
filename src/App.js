import "./App.css";
import { Component } from "react";
import { render } from "@testing-library/react";
import PersonComponent from "./Person/PersonType";
import PersonFun from "./Person/PersonFun";

class App extends Component {
  state = {
    personsName: [
      { name: "Foivos", age: 28 },
      { name: "Evi", age: 27 },
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
    console.log(this.state.personsName);
  };
  nameChangedHandler = (event) => {
    console.log("CHANGED!!");
    console.log(event);
    console.log("end event");
    this.setState({
      personsName: [
        {
          name: event.target.value,
          age: 27,
        },
        {
          name: "Evaggelia",
          age: 37,
        },
      ],
    });
  };

  togglePersonHandler = (numClick) => {
    console.log("Click!!");
    console.log(numClick);
    this.setState({
      numClick: numClick + 1,
    });

    if (numClick % 2 == 0) {
      this.setState({
        showPersons: true,
      });
    } else {
      this.setState({
        showPersons: false,
      });
    }

    console.log(this.state.showPersons);
  };
  render() {
    console.log(this.state.showPersons);
    console.log(this.state.personsName);
    return (
      <div className="App">
        <button
          className="menuButton"
          onClick={() => this.togglePersonHandler(this.state.numClick)}
        >
          Show me the money!!
        </button>
        <h1>To App pou arxizw kai katalavainw</h1>
        {this.state.showPersons ? (
          <div>
            <PersonComponent info={this.state.personsName[1]} />
            <PersonFun
              click={this.switchNameHandler.bind(this, "KING", 37)}
              change={this.nameChangedHandler}
              info={this.state.personsName[0]}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

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
