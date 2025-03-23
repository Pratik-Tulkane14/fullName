import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
    setIsShow(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h1>Full Name Display</h1>
        <div className="first-section">
          <label htmlFor="FName">First Name:</label>
          <input
            id="FName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="second-section">
          <label htmlFor="LName">Last Name:</label>
          <input
            id="LName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      {isShow ? <p>Full Name: {fullName}</p> : null}
    </>
  );
}

export default App;
