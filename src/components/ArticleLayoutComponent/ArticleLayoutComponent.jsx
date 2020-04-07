/* eslint-disable max-len */
import React from 'react';
import styles from './ArticleLayoutComponent.scss';

const ArticleLayoutComponent = () => (
  <main className={styles.mainContent}>
    <h1>Article</h1>
    <article>
      <h2 className={styles.articleTitle}>
        Почему не рассматриваются заявки с жалобами на нарушение Правил игры?
      </h2>
      <div className={styles.articleTextWrapper}>
        <p>После введения функционала  &laquo;Пожаловаться&raquo; не рассматриваются заявки, созданные в Центре поддержки пользователей о нарушении Правил игры по следующим пунктам:</p>
        <ol className={styles.olStyle}>
          <li className={styles.olLiStyle}>
            <span className={styles.titleLi}>
              <b>&laquo;</b>
              Оскарбление и провокация
              <b>&raquo;</b>
            </span>
            <div className={styles.wrapper}>
              <p>В данный пункт входит:</p>
              <ul className={styles.ulStyle}>
                <li>
                  <span className={styles.iconLine}>&#x2015;</span>
                  использование ненормативной лексики и оскарбление собеседников, применение унизительных кличек и прозвищ по рассовому, национальному, религиозному либо половому признаку, а также провоцирование собеседника к их использованию;
                </li>
                <li>
                  <span className={styles.iconLine}>&#x2015;</span>
                  клевета, размещение заведомо ложной информации об Игре, Администрации, Модераторах или Пользователях;
                </li>
                <li>
                  <span className={styles.iconLine}>&#x2015;</span>
                  угрозы реальной расправы в отношении представителей Администрации Проекта. Все виды соглашения.
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.olLiStyle}>
            <span className={styles.titleLi}>
              <b>&laquo;</b>
              Неинформативные сообщения
              <b>&raquo;</b>
            </span>
            <div className={styles.wrapper}>
              <p>В данный пункт входит:</p>
              <ul className={styles.ulStyle}>
                <li>
                  <span className={styles.iconLine}>&#x2015;</span>
                  размещение информации (сообщения, фразы, символов и пр.), направленной на отвлечение Пользователей от темы беседы (флуд);
                </li>
                <li>
                  <span className={styles.iconLine}>&#x2015;</span>
                  все виды рекламных сообщений, в частности ссылки на интернет-ресурсы.
                </li>
              </ul>
            </div>
          </li>
          <p className={styles.pSpecilaStyle}>Также не рассматриваются следующие заявки, созданные в Центре поддержки пользователей о нарушении Правил игры:</p>
          <li className={styles.olLiStyle}>
            <span className={styles.titleLi}>
              <b>&laquo;</b>
              Раскрытие позиции союзников
              <b>&raquo;</b>
            </span>
          </li>
          <li className={styles.olLiStyle}>
            <span className={styles.titleLi}>
              <b>&laquo;</b>
              Выталкивание союзника
              <b>&raquo;</b>
            </span>
          </li>
          <li className={styles.olLiStyle}>
            <span className={styles.titleLi}>
              <b>&laquo;</b>
              Неспортивное поведение
              <b>&raquo;</b>
            </span>
          </li>
          <li className={styles.olLiStyle}>
            <span className={styles.titleLi}>
              <b>&laquo;</b>
              Повреждение союзников
              <b>&raquo;</b>
            </span>
          </li>
        </ol>
      </div>
    </article>
  </main>
);

export default ArticleLayoutComponent;
