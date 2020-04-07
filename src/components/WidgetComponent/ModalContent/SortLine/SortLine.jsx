import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../commonComponent/Input';
import Select from '../../../commonComponent/Select';
import { selectWidgetFilter } from '../../../../utils/utils';
import styles from './SortLine.scss';

const SortLine = ({ onChange, searchValue, filterValue }) => (
  <div className={styles.sortLine}>
    <div className={styles.searchBlock}>
      <span className={styles.label}>Поиск</span>
      <Input type="search" name="search" placeholder="Search..." value={searchValue} onChangeHendler={onChange} />
    </div>
    <div className={styles.filterBlock}>
      <span className={styles.label}>Фильтр</span>
      <Select data={selectWidgetFilter} name="filter" value={filterValue} onChangeHendler={onChange} />
    </div>
  </div>
);

SortLine.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default SortLine;
