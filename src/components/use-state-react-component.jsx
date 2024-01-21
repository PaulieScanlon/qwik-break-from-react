import { useState } from 'react';

const UseStateReactComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <p
        style={{
          lineHeight: '1.2rem',
        }}
      >
        <span style={{ display: 'inline-block', width: '20px' }}>
          {isVisible ? (
            <span role='img' aria-label='Rocket'>
              🚀
            </span>
          ) : null}
        </span>
        Hello, I'm a useState React component
      </p>
      <button onClick={handleVisibility}>{`${isVisible.value ? 'Hide' : 'Show'} Rocket`}</button>
    </div>
  );
};

export default UseStateReactComponent;
