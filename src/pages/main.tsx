import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { increment, decrement } from '../reducers/counterSlice';

const Main = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [master, setMaster] = useState<boolean>(false);
  const [bath, setBath] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);

  interface IFLight {
    room: string,
    on: boolean,
    toggle: () => void
  };

  const Light = React.memo(({room, on, toggle}:IFLight) => {
    console.log(room, on);
    return (
      <button onClick={toggle}>
        {room} {on ? "💡" : "⬛"}
      </button>
    )
  });

  const toggleMaster = useCallback(() => {setMaster(!master)}, [master]);
  const toggleBath = useCallback(() => {setBath(!bath)}, [bath]);
  const togglePlay = useCallback(() => {setPlay(!play)}, [play]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* <Link to="/page1?param=abcd">link</Link> */}
      <Light room={"침실"} on={master} toggle={toggleMaster} />
      <Light room={"욕실"} on={bath} toggle={toggleBath} />
      <Light room={"놀이방"} on={play} toggle={togglePlay} />
    </div>
  )
}

export default Main;