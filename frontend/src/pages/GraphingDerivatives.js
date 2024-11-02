import React, { useEffect, useRef } from 'react';
import styles from './GraphingDerivatives.module.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Desmos from 'desmos';

function GraphingDerivatives() {
  const functionDeclRef = useRef(null);
  const inputRef = useRef(null);
  const graphBtnRef = useRef(null);
  const boardRef = useRef(null);
  const original = useRef(null);
  const derivative = useRef(null);

  useEffect(() => {
    const calculator = Desmos.GraphingCalculator(boardRef.current, {
      keypad: false,
      expressions: false,
      settingMenu: false,
      zoomButtons: true,
      border: false,
      plotImplicits: true,
      zoomFit: true,
    });
    return () => calculator.destroy();
  }, []);

  return (
    <>
    < Header />
    <section className={styles.title}>
      <div className={styles.titleMsg}>
        <h2>Derivative Grapher</h2>
      </div>
      <div className={styles.input}>
        <div ref={functionDeclRef} className={styles.functionDeclRef}>
          <p><b>f(x)=</b></p>
        </div>
        <span ref={inputRef} className={styles.inputRef}></span>
        <button className={styles.btn} ref={graphBtnRef}>
          Graph!
        </button>
      </div>
    </section>
    <section className={styles.grapher}>
      <div ref={boardRef} className={styles.board}></div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span ref={original} className={styles.original}>f(x)-&gt;</span>
          <span className={styles.colorBox} style={{ backgroundColor: "#33ecff" }} />
        </div>
        <div className={styles.legendItem}>
          <span ref={derivative} className={styles.derivative}>f'(x)-&gt;</span>
          <span className={styles.colorBox} style={{ backgroundColor: "#ff3333" }} />
        </div>
      </div>
    </section>
    < Footer />
    </>
  );
}

export default GraphingDerivatives