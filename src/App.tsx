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

  function deleteTaskById(taskId: string): void {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} />
    </>
  );
};

export default App;
