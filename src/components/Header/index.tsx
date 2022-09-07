import React, { ChangeEvent, FormEvent } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

const Header: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = React.useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="ToDo Logo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangTitle}
          value={title}
        />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
