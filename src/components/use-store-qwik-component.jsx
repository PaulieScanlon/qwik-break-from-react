import { component$, useStore, $ } from '@builder.io/qwik';

const UseStoreQwikComponent = component$(() => {
  const rockets = useStore(['🚀']);

  const handleAdd = $(() => {
    rockets.push('🚀');
  });

  const handleRemove = $(() => {
    rockets.pop();
  });

  return (
    <div>
      <div style={{ height: '22px' }}>
        {rockets.map((data) => {
          return (
            <span role='img' aria-label='Rocket'>
              {data}
            </span>
          );
        })}
      </div>
      <p>Hello, I'm a useStore Qwik component</p>
      <button onClick$={handleAdd}>+</button>
      <button onClick$={handleRemove}>-</button>
    </div>
  );
});

export default UseStoreQwikComponent;
