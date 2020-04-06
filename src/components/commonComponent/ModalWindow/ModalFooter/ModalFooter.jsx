import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import styles from './ModalFooter.scss';

const ModalFooter = ({ saveAction, resetAction }) => (
  <div className={styles.modalFooter}>
    <Button text="Сохранить" action={saveAction} classProp="button" />
    <Button text="Отмена" action={resetAction} classProp="button" />
  </div>
);

ModalFooter.propTypes = {
  saveAction: PropTypes.func.isRequired,
  resetAction: PropTypes.func.isRequired,
};

export default ModalFooter;
