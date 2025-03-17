import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isShow, setIsShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow((prev) => !prev);
  };
  return (
    <main className="main">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit} className="form">
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
        {isShow ? (
          <p>
            Full Name:{firstName} {lastName}
          </p>
        ) : null}
      </form>
    </main>
  );
}

export default App;
