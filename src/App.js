import "./App.css";
import Landing from "./Landing";
import CreateUser from "./CreateUser";
import axios from "axios";
import CreateHabit from "./CreateHabit";
import Login from "./Login";
import "./Createhabit.css";


function App() {
  return (
    <div className="App" >
      {/* <Landing /> */}
      {/* <CreateUser /> */}
      <CreateHabit />
      {/* <Login /> */}
    </div>
  );
}

export default App;
