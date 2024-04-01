import React, {useState} from 'react';

function ButtonCounter() {
  const [count, setCount] = useState(0); 
  const ButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={ButtonClick}>Click</button>
      <p>Clicked {count} times</p>
    </div>
  );
}

export default ButtonCounter;