import { useRef, useEffect } from 'react';

const l = console.log.bind(console, '====');

export function useInterval(callback, delay = 1000) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => {
        return clearInterval(id);
      }
    }
  }, [delay]);
}

