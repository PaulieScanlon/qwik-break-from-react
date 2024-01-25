import React, { useState, useEffect } from 'react';

const ClientFetchReactComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/repos/BuilderIO/qwik/pulls/1', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error();
      }

      const json = await response.json();
      setData(json);
      try {
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <p>Hello, I'm a simple Client fetch React component</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default ClientFetchReactComponent;
