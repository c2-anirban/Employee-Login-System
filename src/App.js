import SignIn from "./signIn";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./signUp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import WorkLog from "./worklog/index";
import axios from "axios";

function App() {
  // const user = () => {
  //   if (localStorage.getItem("empId") != null) {
  //     axios
  //       .get("http://localhost:3000/users", {
  //         params: {
  //           id: localStorage.getItem("empId"),
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         // history("/worklog");
  //       });
  //   } else {
  //     // history("/");
  //   }
  // };
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={user ? <Navigate to="/" /> : <WorkLog />} /> */}
          <Route path="/" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/worklog" exact element={<WorkLog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
