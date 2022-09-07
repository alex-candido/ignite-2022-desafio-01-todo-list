import React from 'react';
import { ITask } from '../../App';
import Task from '../Task';
import styles from './tasks.module.css';

interface Props {
  tasks: ITask[];
}

const Tasks: React.FC<Props> = ({ tasks }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted);

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <div>
            {completedTasks} de {tasksQuantity}
          </div>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
