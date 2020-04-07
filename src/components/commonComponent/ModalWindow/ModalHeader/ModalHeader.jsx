import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import styles from './ModalHeader.scss';

const ModalHeader = ({ closeAction }) => (
  <div className={styles.modalHeader}>
    <span>Диалог выбора элементов</span>
    <Button text="&times;" action={() => closeAction()} classProp="buttonClose" />
  </div>
);
ModalHeader.propTypes = {
  closeAction: PropTypes.func.isRequired,
};

export default ModalHeader;
