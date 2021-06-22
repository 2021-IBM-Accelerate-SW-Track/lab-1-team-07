import Header from "./component/header"
import './App.css';
// <<<<<<< take-in-and-display
import ToDoApp from "./component/ToDoApp";
// // Didn't compile
// // import ListItem from ListItemClass.js

// =======
// import ListItem from ListItemClass.js
// //for date and time: https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
// //maybe go through arraylist and print out date and time using built-in function of every index
// >>>>>>> main
function App() {
  return (
    <div className="App">
      <center>
      <Header/>
      <ToDoApp/>
      </center>

    </div>
  );
}

export default App;
