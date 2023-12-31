import "./App.css";
 
import { useState } from "react";
 
import axios from "axios";
 
function App() {
 
  const [data, setData] = useState([]);
 
  const click = () => {
 
    fetch("http://localhost:9001/getAll")
 
      .then((response) => response.json())
 
      .then((data) => {
 
        setData(data);
        console.log(data);
      });
 
  };
 
  const [userid, setUserID] = useState("");
 
  const [pass, setPassword] = useState("");
 
  const [email, setEmailID] = useState("");
 
  const updateUserId = (event) => {
 
    setUserID(event.target.value);
 
  };
 
  const updatePassword = (event) => {
 
    setPassword(event.target.value);
 
  };
 
  const updateEmail = (event) => {
 
    setEmailID(event.target.value);
 
  };
 
  const updateUser = () => {
 
    axios
 
      .put("http://localhost:9001/update", {
 
        id: userid,
 
        pass: pass,
 
        email: email,
 
      })
 
      .then((response) => {
 
        console.log(response);
 
      });
 
  };
 
  const deleteUser = () => {
 
    axios
 
      .delete("http://localhost:9001/DeleteUser", { params: { id: userid } })
 
      .then((response) => {
 
        console.log(response);
 
      });
 
  };
 
  const insertUser = (event) => {
 
    event.preventDefault();
 
    axios.post("http://localhost:9001/insert", {
 
      uid: userid,
 
      password: pass,
 
      emailid: email,
 
      })
 
      .then((response) => {
 
        console.log(response);
 
      });
 
    console.log(userid + " " + pass + " " + email);
 
  };
 
  return (
 
    <div className="App">
 
      <center>
 
        <form onSubmit={insertUser}>
 
          <b>User ID</b>
 
          <input type="text" onChange={updateUserId} value={userid} />
 
          <br />
 
          <b>Password</b>
 
          <input type="password" onChange={updatePassword} value={pass} />
 
          <br />
 
          <b>Email ID</b>
 
          <input type="email" onChange={updateEmail} value={email} />
 
          <br />
 
          <input type="submit" value="Add" />
 
          &nbsp;&nbsp;
 
          <input type="button" value="Delete" onClick={deleteUser} />
 
          <input type="button" value="Update" onClick={updateUser} />
 
          <input type="reset" value="Reset" />
 
        </form>
 
      </center>
 
      <input type="button" onClick={click} value="DisplayAllUser" />
 
      <center>
 
      <table style={{ border: "2px solid black" }}>
 
        <tr> <th>User ID</th> <th>Password</th> <th>Email ID</th></tr>
 
        {Array.isArray(data)? (
 
            data.map((user,index) => (
            <tr><td>{user.userid}</td><td>{user.password}</td><td>{user.emailid}</td></tr>)

 
        )):
 
        setData([])
 
          }
 
      </table>
 
      </center>
 
    </div>
 
  );
 
}
export default App;