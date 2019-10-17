import React, { useState } from 'react';
import { useInterval } from '../lib';

/* eslint-disable no-unused-vars */
const l = console.log.bind(console, '====');

export default function Countdown({ ini = 3 } = {}) {
  const [count, setCount] = useState(null);

  useInterval(() => {
    if (count === null) {
      setCount(ini);
      return;
    }
    setCount(count - 1);
  }, count === 0 ? null : 1000);

  if (count === null) return null;

  return (
    <div>count: { count }</div>
  );
};

