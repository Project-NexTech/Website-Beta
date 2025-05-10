'use client'
import styles from "./page.module.css";
import { useState } from 'react';
import clsx from "clsx";

export function MyButton({num}: {num: number}) {
    // The format is very important because otherwise this would be incorrect syntax for a react component.
    // The function accepts an object with a num property making it a react component using props
    // The {num: number} is to specify a type for TypeScript
    const [count, setCount] = useState(1);
    function handleClick() {
      setCount(count + 1);
      alert('You clicked me ' + JSON.stringify(count) + ' times!');
    }
    return (
      <button className={clsx(
        {
          [styles.redButton]: count <= 5,
          [styles.greenButton]: count > 5,
        }
      )} onClick={handleClick}>Button {num}</button>
      // square brackets are another weird javascript thing, curly brackets create a ton of errors because they get evaluated as strings instead of variables for some reason
    );
}