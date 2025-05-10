import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Other page",
};

export default function Other() {

    return (
        <>
            <div className={styles.page}>
                <main>
                    <h1>Test</h1>
                    <div><Link href="/">Go back</Link></div>
                </main>
            </div>
        </>
    );
}
