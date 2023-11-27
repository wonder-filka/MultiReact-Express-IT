import React, { useState } from "react";
import axios from "axios";

export const Test = () => {
  const [cases, setCases] = useState([]);

  function handleResponse(response) {
    setCases(response.data);
    console.log(response.data);
  }

  function getInfoDB(event) {
    event.preventDefault();
    axios.get(`http://localhost:3001/cases`).then(handleResponse);
  }
  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={getInfoDB}>Get DB info</button>

      <ul>
        {cases.map((caseItem) => (
          <li key={caseItem.id}>
            {caseItem.title} - {caseItem.descript}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
