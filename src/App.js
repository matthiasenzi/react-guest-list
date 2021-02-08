import { useState } from 'react';
import './App.css';

export default function UserGuestList() {
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');

  var [userName, setUserName] = useState([
    { firstName: 'hias', lastName: 'enzi' },
  ]);

  return (
    <div>
      <h1>HIAS' REACT GUEST LIST</h1>
      <p>This is a guest list showing names.</p>
      <p>Enter the names below</p>
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
      <br />
      <button>Add Name </button>
      <br />
      <button>Remove Name</button>
      <br />
      <h2>Attendees</h2>
      <b>
        {' '}
        {userName[0].firstName} {userName[0].lastName}{' '}
      </b>
      <br />
      {/* <button onClick={addName}>Click me</button> */}
    </div>
  );
}
