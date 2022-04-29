import {useState, useEffect} from "react"
import './App.css';
import axios from "axios"
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {

    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          setUsers(response.data)
          console.log(response.data)
        } )
        .catch((error) => {
            console.log(error.message)
        })
 
  },[]);

  console.log(users.map(user => user))

  return (

    <div className="App">
          <h1>Users</h1>
          <User users={users}/>
     
    </div>
  );
}

export default App;
