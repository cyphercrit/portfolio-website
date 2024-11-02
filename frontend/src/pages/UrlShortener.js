import React, { useEffect } from 'react';
import styles from './UrlShortener.module.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function UrlShortener() {
    useEffect(() => {
        document.title = 'URL Shortener';
    })

    return (
        <>
        <Header />
        <div className={styles.titleContainer}>
            <h1>URL Shortener</h1>
        </div>
        <div className={styles.inputContainer}>
            <form className={styles.shortenForm}>
                <input type="text" className={styles.urlInput} placeholder='Enter a URL to shorten' required=''></input>
            </form>
                <button type="submit" className={styles.shortenBtn}>Shorten</button>
        </div>
        <div className={styles.outputContainer}>
            <span className={styles.outputBox}>
                Your shortened URL will appear here
            </span>
            <button className={styles.copyBtn}>Copy</button>
            <span clasName={styles.loadingText} style={{ display: "none" }}>Loading...</span>
        </div>
        <Footer />
        </>
    );
}

export default UrlShortener