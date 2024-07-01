import { useState } from "react";
import "./StudentForm.css";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = { name, age, course };

    try {
      const res = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setName("");
        setAge("");
        setCourse("");
      } else {
        console.log("Failed to submit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
