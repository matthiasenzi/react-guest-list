import { useState } from 'react';
import './App.css';

export default function UserGuestList() {
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');

  return (
    <div>
      <h1>HIAS' REACT GUEST LIST</h1>
      <p>This is a guest list showing names.</p>
      <p>Enter the names below</p>
      <label>
        First Name:
        <input
          // Controlled Component Top Text: onChange of form element
          onChange={(event) => {
            setFirstName(event.currentTarget.value);
          }}
          value={firstName}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          // Controlled Component Top Text: onChange of form element
          onChange={(event) => {
            setLastName(event.currentTarget.value);
          }}
          value={lastName}
        />
      </label>
      <br />
      <button>Add Name</button>
      <br />
      <button>Remove Name</button>
      <br />
    </div>
  );
}
