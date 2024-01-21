import { component$, useSignal, $ } from '@builder.io/qwik';

const UseSignalQwikComponent = component$(() => {
  const isVisible = useSignal(true);

  const handleVisibility = $(() => {
    isVisible.value ? (isVisible.value = false) : (isVisible.value = true);
  });

  return (
    <div>
      <p
        style={{
          lineHeight: '1.2rem',
        }}
      >
        <span style={{ display: 'inline-block', width: '22px' }}>
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
