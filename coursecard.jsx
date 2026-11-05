import React from "react";

function CourseCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Duration: {props.duration}</p>
      <p>Fee: ₹{props.fee}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Course Cards</h1>

      <CourseCard name="React JS" duration="3 Months" fee="5000" />
      <CourseCard name="Python" duration="4 Months" fee="6000" />
      <CourseCard name="Java" duration="5 Months" fee="7000" />
    </div>
  );
}

export default App;
