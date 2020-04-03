import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../../routes/MainPage';
import Search from '../../routes/Search';
import AdaptiveList from '../../routes/AdaptiveList';
import ArticleLayout from '../../routes/ArticleLayout';
import Widget from '../../routes/Widget';
import PageNotFound from '../../routes/PageNotFound';
import Header from '../Header/Header';
import styles from './App.scss';

const App = () => (
  <main className={styles.main}>
    <Header />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/task1" component={Search} />
      <Route exact path="/task2" component={AdaptiveList} />
      <Route exact path="/task3" component={ArticleLayout} />
      <Route exact path="/task4" component={Widget} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </main>

);

export default App;
