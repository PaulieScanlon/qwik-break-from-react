import { component$, useTask$, useSignal } from '@builder.io/qwik';

const ClientFetchQwikComponent = component$(() => {
  const data = useSignal(null);

  useTask$(async () => {
    try {
      const response = await fetch('https://api.github.com/repos/BuilderIO/qwik/pulls/1', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error();
      }

      const json = await response.json();
      data.value = json;
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div>
      <p>Hello, I'm a simple Client fetch Qwik component</p>
      {data.value ? <pre>{JSON.stringify(data.value, null, 2)}</pre> : null}
    </div>
  );
});

export default ClientFetchQwikComponent;
