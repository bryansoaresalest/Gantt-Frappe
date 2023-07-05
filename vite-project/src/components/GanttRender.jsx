import React from "react";
import Gantt from "frappe-gantt";
import "./../index.css";

const GanttRender = ({ tasks }) => {
  const [timeScale, setTimeScale] = React.useState("Day");

  React.useEffect(() => {
    let ganttChart = new Gantt("#gantt", tasks, {
      arrow_curve: 18,
      view_mode: timeScale,
      bar_height: 50,
      column_width: 1,
      language: "ptBr",
      custom_popup_html: function (tasks) {
        return `<div class="details-container">
              <h5>Status: ${tasks.name}</h5>
              <p>Task iniciada no dia: ${tasks._start.getDate()}</p>
              <p>Expectativa de término dia: ${tasks._end.getDate()}</p>
              <p>Dependênci(as): ${
                tasks.dependencies.length > 0
                  ? tasks.dependencies
                  : "Não possui"
              }</p>
              <p>${tasks.progress}% completo!</p>
            </div>`;
      },
    });
  }, [timeScale]);

  function setClassColor(item, index) {
    let { status, progress } = item;
    tasks[index].name = tasks[index].id;

    if (progress === 0) {
      tasks[index].custom_class = "a-iniciar";
    }
    if ((progress > 0 && item.progress < 100) || status !== "") {
      tasks[index].custom_class = "em-andamento";
    }
    if (progress === 100) {
      tasks[index].custom_class = "finalizada";
    }
    if (status === "pendente" && progress !== 100) {
      tasks[index].custom_class = "pendente";
    }
  }

  tasks.map((item, index) => setClassColor(item, index));

  return (
    <div className="ganttRenderGraphic">
      <h2 className="timeScale-title">Exibindo por periodo de: {timeScale}</h2>
      <svg id="gantt"></svg>
      <div className="timeScale">
        <h3>Mudar TimeScale</h3>
        <div>
          <button
            onClick={() => {
              setTimeScale("Day");
            }}
          >
            Dia
          </button>
          <button
            onClick={() => {
              setTimeScale("Week");
            }}
          >
            Semana
          </button>
          <button
            onClick={() => {
              setTimeScale("Month");
            }}
          >
            Mês
          </button>
        </div>
      </div>
    </div>
  );
};

export default GanttRender;
