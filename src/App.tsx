import { useState, MouseEventHandler, FC } from 'react';
import './App.css';

type ButtonProps = {
  text: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
};

/* eslint-disable @typescript-eslint/no-empty-function */
const Button: FC<ButtonProps> = ({ text, onClick }: ButtonProps) => (
  <button className="ui-button" type="button" onClick={onClick || (() => {})}>
    <span>{text}</span>
  </button>
);
/* eslint-enable @typescript-eslint/no-empty-function */

type CountProps = {
  count: number,
};

const DisplayCount: FC<CountProps> = ({ count }) => (
  <p className="ui-count">Count is: {count}!</p>
);

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (increment: number) => () => {
    setCount(count + increment);
  };

  return (
    <div className="app">
      <header className="app-header">
        <DisplayCount count={count} />
        <p>
          <Button text="+" onClick={updateCount(1)} />
          <Button text="-" onClick={updateCount(-1)} />
        </p>
      </header>
    </div>
  );
}

export default App;
