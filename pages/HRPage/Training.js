import React, { useState } from 'react';

// Initial dummy data for training sessions
const initialTrainingData = [
  {
    id: 1,
    title: "React Basics",
    date: "2024-12-15",
    trainer: "John Doe"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    date: "2024-12-20",
    trainer: "Jane Smith"
  },
  {
    id: 3,
    title: "Node.js Fundamentals",
    date: "2024-12-25",
    trainer: "Alice Johnson"
  }
];

const Training = () => {
  const [trainings, setTrainings] = useState(initialTrainingData);
  const [newTraining, setNewTraining] = useState({ title: "", date: "", trainer: "" });

  // Handle input change for new training
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTraining({
      ...newTraining,
      [name]: value
    });
  };

  // Handle adding new training
  const handleAddTraining = (e) => {
    e.preventDefault();
    if (!newTraining.title || !newTraining.date || !newTraining.trainer) {
      alert("Please fill out all fields.");
      return;
    }
    const newTrainingData = {
      id: trainings.length + 1,
      ...newTraining
    };
    setTrainings([...trainings, newTrainingData]);
    setNewTraining({ title: "", date: "", trainer: "" });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Training Sessions</h1>

      {/* Training Session Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Training</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Title</th>
              <th className="border-b px-4 py-2">Date</th>
              <th className="border-b px-4 py-2">Trainer</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.id}>
                <td className="border-b px-4 py-2">{training.title}</td>
                <td className="border-b px-4 py-2">{training.date}</td>
                <td className="border-b px-4 py-2">{training.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form to Add New Training */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Training</h2>
        <form onSubmit={handleAddTraining}>
          <div className="mb-4">
            <label className="block font-medium">Training Title</label>
            <input
              type="text"
              name="title"
              value={newTraining.title}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter training title"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Training Date</label>
            <input
              type="date"
              name="date"
              value={newTraining.date}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Trainer Name</label>
            <input
              type="text"
              name="trainer"
              value={newTraining.trainer}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter trainer name"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Add Training
          </button>
        </form>
      </div>
    </div>
  );
};

export default Training;
