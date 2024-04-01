
// // import logo from './logo.svg';
// import './App.css';
// //import Mouni from './project/first';
// import Display from './project/second';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
      
//        <Display/> 
      
      
      
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import One from './one';
import Two from './two';
import Three from './thre';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isEligible, setIsEligible] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (age >= 18) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  return (
    <div className="App">
      <h1>Voting Eligibility Check</h1>
      {isEligible ? (
        <Two name={name} />
      ) : (
        <Three name={name} />
      )}
      <One
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;