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
      <div className='h-8'>
        {rockets.map((data, index) => {
          return (
            <span key={index} role='img' aria-label='Rocket'>
              {data}
            </span>
          );
        })}
      </div>
      <p>Hello, I'm a useState array React component</p>
      <div className='flex gap-4'>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
      </div>
    </div>
  );
};

export default UseStateBooleanReactComponent;
