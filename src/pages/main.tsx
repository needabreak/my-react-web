import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';

const Main = () => {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <div>
      <strong>main!</strong>
      <p>{count}</p>
    </div>
  )
}

export default Main;