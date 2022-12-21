import React, { useState } from "react";
import styles from "../../styles/index1.module.css";
import { Modal } from "../Modal";
import { BackDrop } from "../BackDrop";

export const Todo = (props) => {
  const [showModal, setShowModal] = useState(false);
  function deleteHandler() {
    setShowModal(true);
  };

  function closeModalHandler(){
    setShowModal(false);
  };
  
  return (
    <div className={styles.card}>
      <h2>{props.text}</h2>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {showModal && <BackDrop onCancel={closeModalHandler}/>}
    </div>
  );
};
