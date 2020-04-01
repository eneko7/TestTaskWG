import React from 'react';
import style from './Loading.scss';

const Loader = () => (
  <div className={style.loading}>
    <div className={style.wrapper_loading} id="loading">
      <div className={style.wrapper_loading} />
      <div className={style.wrapper_loading} />
      <div className={style.wrapper_loading} />
    </div>
    <div className={style.wrapper_loading_text} id="loading_text">
      <span className={style.wrapper_loading_text_span}>LOADING</span>
    </div>
  </div>
);

export default Loader;
