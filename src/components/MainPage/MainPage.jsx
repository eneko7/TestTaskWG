import React from 'react';
import testPDF from '../../assets/images/test_task_pdf.pdf';
import styles from './MainPage.scss';

const MainPage = () => (
  <main className={styles.mainContet}>
    <iframe title="test task" src={`${testPDF}#view=FitH`} type="application/pdf" width="98%" height="70%" />
  </main>
);

export default MainPage;
