import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Task {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

const Task: React.FC<Task> = ({ task, onDelete, onComplete }) => {
  return (
    <div className={styles.task}>
      <button
        type="button"
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
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
