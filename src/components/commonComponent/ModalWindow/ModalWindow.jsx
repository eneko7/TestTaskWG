import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import styles from './ModalWindow.scss';

const ModalWindow = (props) => {
  const {
    open, saveAction, resetAction, children,
  } = props;
  return open && (
    <>
      <div className={styles.modal}>
        <ModalHeader closeAction={resetAction} />
        <div className={styles.modalContent}>{children}</div>
        <ModalFooter saveAction={saveAction} resetAction={resetAction} />
      </div>
      <div className={styles.backDrop} />
    </>
  );
};

ModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  resetAction: PropTypes.func.isRequired,
  saveAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWindow;
