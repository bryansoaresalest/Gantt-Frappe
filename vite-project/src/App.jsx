import { useState, useEffect } from "react";
import GanttRender from "./assets/components/GanttRender";

// let tasks = [
//   {
//     id: "Task 1",
//     name: "",
//     start: "2022-01-12",
//     end: "2022-01-13",
//     progress: 100,
//     status: "pendente",
//   },
//   {
//     id: "Task 2",
//     name: "",
//     start: "2022-01-14",
//     end: "2022-01-15",
//     progress: 100,
//     status: "",
//   },
//   {
//     id: "Task 3",
//     name: "",
//     start: "2022-01-17",
//     end: "2022-01-20",
//     progress: 20,
//     status: "",
//     dependencies: "Task 2",
//   },
//   {
//     id: "Task 19",
//     name: "",
//     start: "2022-01-20",
//     end: "2022-01-23",
//     progress: 38.5,
//     status: "",
//     dependencies: "Task 2, Task 3",
//   },
//   {
//     id: "Task 4",
//     name: "",
//     start: "2022-01-19",
//     end: "2022-01-20",
//     progress: 0,
//     status: "",
//     dependencies: "Task 3",
//   },
//   {
//     id: "Task 5",
//     name: "",
//     start: "2022-01-22",
//     end: "2022-01-23",
//     progress: 0,
//     status: "",
//   },
//   {
//     id: "Task 6",
//     name: "",
//     start: "2022-01-25",
//     end: "2022-01-26",
//     progress: 0,
//     status: "",
//     dependencies: "Task 4, Task 5",
//   },
//   {
//     id: "Task 7",
//     name: "",
//     start: "2022-01-27",
//     end: "2022-01-29",
//     progress: 50,
//     status: "",
//   },
//   {
//     id: "Task 8",
//     name: "",
//     start: "2022-01-29",
//     end: "2022-02-01",
//     progress: 0,
//     status: "",
//   },
// ];

let styleLoading = {
  width: "100%",
  background: "white",
  color: '#000',
  fontWeight: 'bold',
  margin: "0 auto",
  fontSize: "5rem",
  textAlign: "center",
  position: "absolute",
  borderStartStartRadius: '2rem',
  borderEndEndRadius: '2rem',
  boxShadow: '0 0 5px #fff, inset 2px 2px 10px #cccf'
};

// Dados para montar o gant no useState tasks:
//{
//  id: string (nome da task)
//  name: string (vazia)
//  start: date (AAAA-MM-DD)
//  end: date (AAAA-MM-DD)
//  progress: number (0-100)
//  status: string (pendente, a iniciar, finalizado, em andamento)
//  dependencies: string (id1,id2...)
// }

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "Task 1",
      name: "",
      start: "2022-01-12",
      end: "2022-01-13",
      progress: 100,
      status: "pendente",
    },
    {
      id: "Task 2",
      name: "",
      start: "2022-01-14",
      end: "2022-01-15",
      progress: 100,
      status: "finalizada",
    },
    {
      id: "Task 3",
      name: "",
      start: "2022-01-17",
      end: "2022-01-20",
      progress: 20,
      status: "pendente",
      dependencies: "Task 2",
    },
    {
      id: "Task 19",
      name: "",
      start: "2022-01-20",
      end: "2022-01-23",
      progress: 38.5,
      status: "",
      dependencies: "Task 2, Task 3",
    },
    {
      id: "Task 4",
      name: "",
      start: "2022-01-19",
      end: "2022-01-20",
      progress: 0,
      status: "",
      dependencies: "Task 3",
    },
    {
      id: "Task 5",
      name: "",
      start: "2022-01-22",
      end: "2022-01-23",
      progress: 0,
      status: "",
    },
    {
      id: "Task 6",
      name: "",
      start: "2022-01-25",
      end: "2022-01-26",
      progress: 0,
      status: "",
      dependencies: "Task 4, Task 5",
    },
    {
      id: "Task 7",
      name: "",
      start: "2022-01-27",
      end: "2022-01-29",
      progress: 50,
      status: "",
    },
    {
      id: "Task 8",
      name: "",
      start: "2022-01-29",
      end: "2022-02-01",
      progress: 0,
      status: "",
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [tasks]);

  if (loading) return <p style={styleLoading}>Atualizando gantt...</p>;

  return (
    <div>
      <GanttRender tasks={tasks} />;
    </div>
  );
};

export default App;
