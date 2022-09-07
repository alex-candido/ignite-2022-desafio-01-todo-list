import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './styles/global.css';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<ITask[]>([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: true,
    },
  ]);
  return (
    <>
      <Header setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;
