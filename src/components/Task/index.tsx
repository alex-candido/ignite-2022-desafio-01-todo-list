import React from 'react';
import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Task {
  task: ITask;
  onDelete: (taskId: string) => void;
}

const Task: React.FC<Task> = ({ task, onDelete }) => {
  return (
    <div className={styles.task}>
      <button type="button" className={styles.checkContainer}>
        <div />
      </button>

      <p>{task.title}</p>

      <button
        type="submit"
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
      >
        <TbTrash />
      </button>
    </div>
  );
};

export default Task;
