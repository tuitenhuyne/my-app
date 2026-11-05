import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileList() {
  const [subject, setSubject] = useState([]);

  // Fetch data
  // 1. fetch
  // 2. axios

  // 1. using fetch


  useEffect(() => {
    //using fetch
   /* fetch("https://6adff5228e42963c8d5e872a.mockapi.io/profile")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubject(data);
      }); */
      //using axios
      //install axios
      axios.get("https://6adff5228e42963c8d5e872a.mockapi.io/dpPlayers")
      .then((res) => {
        console.log(res.data);
        setSubject(res.data);
      })
  }, []);

  return (
    <>
      <h1>Profile List</h1>
      <ul>
        {subject.map((s) => (<li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </>
  );
}