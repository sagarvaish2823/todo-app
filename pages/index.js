import Head from "next/head";
import { Todo } from "../components/Todo";
import { Ubuntu } from "@next/font/google";
import styles from "../styles/index1.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Todo App</title>
        <meta name="description" content="Todo App to manage the day." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <h1>My Todo</h1>
        <div className={styles.todoContainer}>
          <Todo text='Hushu'/>
          <Todo text='Pidda'/>
          <Todo text='Hushu Pidda'/>
        </div>
      </div>
    </>
  );
}
