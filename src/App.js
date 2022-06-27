// import "./App.css";
import Landing from "./Landing";
import CreateUser from "./CreateUser";
import axios from "axios";
import CreateHabit from "./CreateHabit";
import Login from "./Login";
import { Route,Routes } from "react-router-dom";
import HabitList from "./HabitList"

function App() {
  return (
    <div className="App">
      {/* <Landing /> */}
      {/* <CreateUser /> */}
      {/* <CreateHabit /> */}
      {/* <Login /> */}
      <main>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/createUser" element={<CreateUser />}/>
          <Route path= "/createHabit" element={<CreateHabit />}/>
          <Route path= "/login" element={<Login />}/>
          <Route path= "/habitList" element={<HabitList />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
