import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Other() {
    return (
        <>
            <h1>Test</h1>
            <div><Link href="/">Go back</Link></div>
            { /* Figure out how to add syles in CSS for this */ }
        </>
    );
}