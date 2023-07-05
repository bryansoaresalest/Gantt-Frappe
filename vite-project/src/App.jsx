import { useState, useEffect } from "react";
import GanttRender from "./components/GanttRender";

let styleLoading = {
  width: "100%",
  background: "white",
  color: "#000",
  fontWeight: "bold",
  margin: "0 auto",
  fontSize: "5rem",
  textAlign: "center",
  position: "absolute",
  borderStartStartRadius: "2rem",
  borderEndEndRadius: "2rem",
  boxShadow: "0 0 5px #fff, inset 2px 2px 10px #cccf",
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
      id: "Iniciativa",
      name: "Iniciativa",
      start: "2022-01-10",
      end: "2022-01-11",
      progress: 100,
      status: "",
    },
    {
      id: "Epico",
      name: "Epico",
      start: "2022-01-12",
      end: "2022-01-13",
      progress: 100,
      status: "",
      dependencies: "",
    },
    {
      id: "Task 1",
      name: "Task 1",
      start: "2022-01-14",
      end: "2022-01-15",
      progress: 0,
      status: "pendente",
      dependencies: "Epico",
    },
    {
      id: "Task",
      name: "Task",
      start: "2022-01-14",
      end: "2022-01-15",
      progress: 0,
      status: "pendente",
      dependencies: "Epico",
    },

    {
      id: "Epico 2",
      name: "Epico 2",
      start: "2022-01-12",
      end: "2022-01-13",
      progress: 100,
      status: "",
      dependencies: "",
    },
    {
      id: "Taskk 1",
      name: "Taskk 1",
      start: "2022-01-14",
      end: "2022-01-15",
      progress: 0,
      status: "pendente",
      dependencies: "Epico 2",
    },
    {
      id: "Taskk",
      name: "Taskk",
      start: "2022-01-14",
      end: "2022-01-15",
      progress: 0,
      status: "pendente",
      dependencies: "Epico 2",
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
