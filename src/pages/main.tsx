import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { increment, decrement } from '../reducers/counterSlice';

const Main = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <strong>main!</strong>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <Link to="/page1?param=abcd">link</Link>
    </div>
  )
}

export default Main;