
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [users, setUsers] =useState([]);

  useEffect(()=>{
    fetch ('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return (
    <>
      
      <h1>User Manegment Clientsite</h1>
      <p>Number of Users:{users.length}</p>
      
    </>
  )
}

export default App
