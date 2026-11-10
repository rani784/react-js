
import React from "react";

function StudentList() {

  const students = [
    {
      id: 1,
      name: "Kamalraj M",
      email: "tamil@gmail.com",
      age: 27,
      city: "chennai",
      role: "React Developer"
    },
    {
      id: 2,
      name: "Rani",
      email: "Rani@gmail.com",
      age: 24,
      city: "Vijayapur",
      role: "Frontend Developer"
    },
    {
      id: 3,
      name: "Karthik",
      email: "karthik@gmail.com",
      age: 30,
      city: "Gangavati",
      role: "Backend Developer"
    },
    {
      id: 4,
      name: "Priya",
      email: "priya@gmail.com",
      age: 23,
      city: "Bangalore",
      role: "UI Developer"
    },
    {
      id: 5,
      name: "Divya",
      email: "divya@gmail.com",
      age: 25,
      city: "Madurai",
      role: "Frontend Developer"
    }
  ];

  return (
    <div className="student-section">
      <h2>Student Details</h2>

      <div className="student-container">

        {students.map((student) => (
          <div className="student-card" key={student.id}>

            <h3>{student.name}</h3>

            <p><b>Email:</b> {student.email}</p>
            <p><b>Age:</b> {student.age}</p>
            <p><b>City:</b> {student.city}</p>
            <p><b>Role:</b> {student.role}</p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default StudentList;