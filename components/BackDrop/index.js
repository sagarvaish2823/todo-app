import React from 'react'
import styles from "../../styles/index1.module.css";

export const BackDrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onCancel} />
  )
}
