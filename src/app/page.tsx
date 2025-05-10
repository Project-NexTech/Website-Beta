'use client'
import Image from "next/image";
import Link from 'next/link'
import styles from "./page.module.css";
import { useState } from 'react';
import clsx from 'clsx';

// This is the "index" file

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
  { title: 'Orange', isFruit: true, id: 4 },
];

export default function Home() {

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'red' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  function MyButton({num}: {num: number}) {
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

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Link href="/other" className="ee">Link Test</Link>
        <ul>{listItems}</ul>
        <MyButton num={1} />
        <MyButton num={2} />
      </main>
      <footer className={styles.footer}>
       <p>Footer</p>
      </footer>
    </div>
  );
}
