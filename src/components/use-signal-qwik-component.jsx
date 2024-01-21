import { component$, useSignal, $ } from '@builder.io/qwik';

const UseSignalQwikComponent = component$(() => {
  const isVisible = useSignal(true);

  const handleVisibility = $(() => {
    isVisible.value ? (isVisible.value = false) : (isVisible.value = true);
  });

  return (
    <div>
      <p>
        <span>
          {isVisible.value ? (
            <span role='img' aria-label='Rocket'>
              🚀
            </span>
          ) : null}
        </span>
        Hello, I'm a useSignal Qwik component
      </p>
      <button onClick$={handleVisibility}>{`${isVisible.value ? 'Hide' : 'Show'} Rocket`}</button>
    </div>
  );
});

export default UseSignalQwikComponent;
