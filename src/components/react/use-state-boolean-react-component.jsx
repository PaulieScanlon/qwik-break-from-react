import React, { useState } from 'react';

const UseStateBooleanReactComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <p>
        <span>
          {isVisible ? (
            <span role='img' aria-label='Rocket'>
              🚀
            </span>
          ) : null}
        </span>
        Hello, I'm a useState boolean React component
      </p>
      <button onClick={handleVisibility}>{`${isVisible.value ? 'Hide' : 'Show'} Rocket`}</button>
    </div>
  );
};

export default UseStateBooleanReactComponent;
