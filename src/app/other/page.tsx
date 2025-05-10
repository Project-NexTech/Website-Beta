'use client'
import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import { useState } from 'react';

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
