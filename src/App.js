import "./App.css";
import Landing from "./Landing";
import CreateUser from "./CreateUser";
import axios from "axios";
import CreateHabit from "./CreateHabit";

function App() {
  return (
    <div className="App">
      {/* <Landing /> */}
      {/* <CreateUser /> */}
      <CreateHabit />
    </div>
  );
}

export default App;
