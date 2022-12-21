import React from "react";
import styles from "../../styles/index1.module.css";

export const Modal = (props) => {
    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }
    
  return (
    <div className={styles.modal}>
      <h2>Are you Sure?</h2>
      <div className={styles.modalContainer}>
        <button className={`${styles.btn} ${styles.btnAlt}`} onClick={cancelHandler}>Cancel</button>
        <button className={styles.btn} onClick={confirmHandler} >Confirm</button>
      </div>
    </div>
  );
};
