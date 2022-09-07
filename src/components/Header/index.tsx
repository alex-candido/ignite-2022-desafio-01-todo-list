import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ITask } from '../../App';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';

interface Task {
  setTasks: ITask;
}

const Header: React.FC = ({ setTasks }) => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="ToDo Logo" />

      <form className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={event => setTasks(event.target)}
        />
        <button type="button">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
