import Image from "next/image";
import styles from "./page.module.css";
// This is the index file

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
        <a href="/other" className="ee">Link Test</a>
        <ul>{listItems}</ul>
      </main>
      <footer className={styles.footer}>
       <p>Footer</p>
      </footer>
    </div>
  );
}
