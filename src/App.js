import { useState } from 'react';
import './App.css';

export default function UserGuestList() {
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');

  var [userName, setUserName] = useState([
    { id: 1, firstName: firstName, lastName: lastName },
  ]);

  return (
    <div>
      <h1>HIAS' REACT GUEST LIST</h1>
      <p>Please enter the names below.</p>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <h2>Guest names</h2>
      <ol>
        {userName.map((userName) => (
          <li key={`userName-${userName.id}`}>
            {userName.firstName} {userName.lastName}
          </li>
        ))}
      </ol>
      <button
        onClick={() => {
          const lastId = userName.slice(-1)[0].id;
          const nextId = lastId + 1;
          const newUserName = {
            id: nextId,
            firstName: firstName,
            lastName: lastName,
          };
          const newNames = [...userName, newUserName];

          setUserName(newNames);
        }}
      >
        Add Name
      </button>

      <br />
      <br />
      <button>Remove name</button>
      <button>Clear all</button>
      <br />
    </div>
  );
}
