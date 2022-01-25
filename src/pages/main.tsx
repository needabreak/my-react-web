import { useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../hooks';
import { increment, decrement } from '../reducers/counterSlice';

const Main = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // dispatch(set)
  return (
    <div>
      <strong>main!</strong>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Main;