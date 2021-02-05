import { useState } from 'react';
import './App.css';

export default function UserGuestList() {
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');
  var [userName, setUserName] = useState('');

  // function handleChange(event) {
  //   setFirstName(event.target.value);
  //   setLastName(event.target.value);

  // <label>
  //     <input
  //     onclick={handleChange}
  //       value={firstName}
  //       placeholder="Enter your name"
  //     />
  //     </label>

  return (
    <div>
      <h1>HIAS' REACT GUEST LIST</h1>
      <p>This is a guest list showing names.</p>
      <p>Enter the names below</p>
      <label>
        First Name:
        <input
          // Input first name
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
          // Input last name
          onChange={(event) => {
            setLastName(event.currentTarget.value);
          }}
          value={lastName}
        />
      </label>
      <br />
      <br />
      <button>Add Name</button>
      <br />
      <button>Remove Name</button>
      <br />
      <p>
        <label onClick={userName}>
          {firstName} {lastName}
        </label>
      </p>
      <br />
    </div>
  );
}
