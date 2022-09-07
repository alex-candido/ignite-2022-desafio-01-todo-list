import React from 'react';
import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Task {
  task: ITask;
}

const Task: React.FC<Task> = ({ task }) => {
  return (
    <div className={styles.task}>
      <button type="button" className={styles.checkContainer}>
        <div />
      </button>

      <p>{task.title}</p>

      <button type="button" className={styles.deleteButton}>
        <TbTrash />
      </button>
    </div>
  );
};

export default Task;
