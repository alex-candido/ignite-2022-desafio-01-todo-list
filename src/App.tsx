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
      id: 'teste1',
      title: 'teste',
      isCompleted: true,
    },
    {
      id: 'teste2',
      title: 'teste',
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string): void {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }
  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;
