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
      <div className='h-8'>
        {rockets.map((data) => {
          return (
            <span role='img' aria-label='Rocket'>
              {data}
            </span>
          );
        })}
      </div>
      <p>Hello, I'm a useStore Qwik component</p>
      <div className='flex gap-4'>
        <button onClick$={handleAdd}>+</button>
        <button onClick$={handleRemove}>-</button>
      </div>
    </div>
  );
});

export default UseStoreQwikComponent;
