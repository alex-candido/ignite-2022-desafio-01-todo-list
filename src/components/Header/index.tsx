import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

const Header: React.FC<Props> = ({ onAddTask }) => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="ToDo Logo" />

      <form className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="button">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
