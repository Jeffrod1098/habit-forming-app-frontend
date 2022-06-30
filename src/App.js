// import "./App.css";
import { useState } from "react";
import Landing from "./Landing";
import CreateUser from "./CreateUser";
import axios from "axios";
import CreateHabit from "./CreateHabit";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import HabitList from "./HabitList";
import UserPage from "./UserPage";
import EditHabit from "./EditHabit";

function App() {
  const [userName, setUserName] = useState("user");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      {/* <Landing /> */}
      {/* <CreateUser /> */}
      {/* <CreateHabit /> */}
      {/* <Login /> */}
      <main>
        <Routes>
          <Route path="/home" element={<UserPage userName={userName} />} />
          <Route path="/" element={<Landing />} />
          <Route
            path="/createUser"
            element={
              <CreateUser
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/createHabit"
            element={<CreateHabit userName={userName} />}
          />
          <Route
            path="/login"
            element={
              <Login
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/habitList" element={<HabitList />} />
          <Route
            path="/editHabit/:id"
            element={<EditHabit userName={userName} />}
          />
        </Routes>
      </main>
    </div>
  );
}
export default App;
