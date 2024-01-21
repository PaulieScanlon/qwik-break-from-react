import { useState } from 'react';

const UseStateBooleanReactComponent = () => {
  const [rockets, setRockets] = useState(['🚀']);

  const handleAdd = () => {
    setRockets((prevState) => [...prevState, '🚀']);
  };

  const handleRemove = () => {
    setRockets((prevState) => [...prevState.slice(0, -1)]);
  };

  return (
    <div>
      <div style={{ height: '22px' }}>
        {rockets.map((data, index) => {
          return (
            <span key={index} role='img' aria-label='Rocket'>
              {data}
            </span>
          );
        })}
      </div>
      <p>Hello, I'm a useState array React component</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRemove}>-</button>
    </div>
  );
};

export default UseStateBooleanReactComponent;
