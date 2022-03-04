import {
  useState,
  // MouseEventHandler,
  FC,
} from 'react';

import { Button } from '@src/components/Button';

import './Counter.css';

type CountProps = {
  count: number,
};

const DisplayCount: FC<CountProps> = ({ count }) => (
  <p className="ui-count">Count is: {count}!</p>
);

export function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = (increment: number) => () => {
    setCount(count + increment);
  };

  return (
    <div className="page page-counter">
      <h2>Counter</h2>
      <DisplayCount count={count} />
      <p className="increment">
        <Button text="+" onClick={updateCount(1)} />
        <Button text="-" onClick={updateCount(-1)} />
      </p>
    </div>
  );
}
