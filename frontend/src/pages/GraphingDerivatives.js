import React from 'react';
import styles from './GraphingDerivatives.module.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function GraphingDerivatives() {
  return (
    <>
    <div className={styles.pageContainer}>
    <Header className={styles.mainheader} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.css"
      />
      <title>Graphing Derivatives</title>

      <section className={styles.header}>
        <div className={styles.title}>
          <h2>Derivative Grapher</h2>
        </div>
        <div className={styles.input}>
          <div className={styles.functionDecl}>
            <p>
              <b>f(x)=</b>
            </p>
          </div>
          <span className={styles.mathquillInput} />
          <button className={`${styles.btn} ${styles.graphBtn}`}>
            Graph!
          </button>
        </div>
      </section>

      <section className={styles.grapher}>
        <div className={`${styles.board}`} />
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.original}>f(x)-&gt;</span>
            <span 
              className={styles.colorBox} 
              style={{ backgroundColor: "#33ecff" }} 
            />
          </div>
          <div className={styles.legendItem}>
            <span className={styles.derivative}>f'(x)-&gt;</span>
            <span 
              className={styles.colorBox} 
              style={{ backgroundColor: "#ff3333" }} 
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}

export default GraphingDerivatives;