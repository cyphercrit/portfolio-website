import React, { useState, useEffect } from 'react';
import styles from './UrlShortener.module.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function UrlShortener() {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('Your shortened URL will appear here');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'URL Shortener';
    }, []);

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setShortenedUrl('Loading...');

        try {
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (response.ok) {
                const data = await response.json();
                setShortenedUrl(`https://short.jurkovski.com/${data.short_url}`);
            } else if (response.status === 400) {
                const errorData = await response.json();
                console.error('Error:', errorData.error);
                setShortenedUrl(errorData.error);
            } else {
                console.error('Failed to shorten URL');
                setShortenedUrl('Error shortening URL.');
            }
        } catch (error) {
            console.error('Error:', error);
            setShortenedUrl('An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (shortenedUrl && shortenedUrl !== 'Loading...') {
            navigator.clipboard.writeText(shortenedUrl)
                .then(() => {
                    console.log('URL copied to clipboard');
                })
                .catch((err) => {
                    console.error('Failed to copy URL:', err);
                });
        }
    };

    return (
        <>
            <Header />
            <div className={styles.titleContainer}>
                <h1>URL Shortener</h1>
            </div>
            <div className={styles.inputContainer}>
                <form className={styles.shortenForm} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className={styles.urlInput}
                        placeholder="Enter a URL to shorten"
                        value={url}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className={styles.shortenBtn} disabled={loading}>
                        Shorten
                    </button>
                </form>
            </div>
            <div className={styles.outputContainer}>
                <span className={styles.outputBox}>
                    {loading ? 'Loading...' : shortenedUrl}
                </span>
                <button onClick={handleCopy} className={styles.copyBtn} disabled={loading || shortenedUrl.includes('Loading')}>
                    Copy
                </button>
            </div>
            <Footer />
        </>
    );
}

export default UrlShortener;
