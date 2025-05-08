'use client'
// use server whenever possible
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import { useState } from 'react';

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

  function MyButton() {
    const [count, setCount] = useState(1);
    function handleClick() {
      setCount(count + 1);
      alert('You clicked me ' + JSON.stringify(count) + ' times!');
    }
    return (
      <button onClick={handleClick}>Button</button>
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
        <MyButton />
      </main>
      <footer className={styles.footer}>
       <p>Footer</p>
      </footer>
    </div>
  );
}
