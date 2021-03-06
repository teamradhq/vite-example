import {
  FC,
} from 'react';

import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { increment, decrement } from '@src/store/counterSlice';
import { selectCounter } from '@src/store/selectors';

import { Button } from '@src/components/Ui/Button';
import { Page } from '@src/pages/Page';

import './Counter.css';

type CountProps = {
  count: number,
};

const DisplayCount: FC<CountProps> = ({ count }) => (
  <p className="ui-count">Count is: {count}!</p>
);

export function Counter() {
  const count = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  return (
    <Page
      title="Counter"
      slug="counter"
      description="A simple counter from the Vite example template."
    >
      <h2>Counter</h2>
      <DisplayCount count={count} />
      <p className="increment">
        <Button text="-" onClick={() => dispatch(decrement())} />
        <Button text="+" onClick={() => dispatch(increment())} />
      </p>
    </Page>
  );
}
