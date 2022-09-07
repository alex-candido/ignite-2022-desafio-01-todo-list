import React from 'react';
import { ITask } from '../../App';
import Task from '../Task';
import styles from './tasks.module.css';

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

const Tasks: React.FC<Props> = ({ tasks, onDelete, onComplete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
