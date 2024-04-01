import React from 'react';

const One = ({ name, setName, age, setAge, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value, 10))}
        placeholder="Enter your age"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default One;