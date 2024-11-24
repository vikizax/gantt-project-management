import { useEffect, useRef } from "react";
import "./codebase/dhtmlxgantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import { GanttStatic } from "./codebase/dhtmlxgantt";
import "./style.css";

const data = {
  data: [
    {
      id: 1,
      text: "Task #1",
      start_date: "2024-08-20 10:30",
      duration: 8,
      progress: 0.6,
      priority: "high",
    },
    {
      id: 2,
      text: "Task #2",
      start_date: "2019-08-21 10:30",
      duration: 3,
      progress: 0.4,
      priority: "normal",
    },
    {
      id: 3,
      text: "Task #3",
      start_date: "2024-08-23 10:30",
      duration: 3,
      progress: 0.4,
      priority: "low",
    },
    {
      id: 4,
      text: "Task #4",
      start_date: "2024-08-24 10:30",
      duration: 3,
      progress: 0.4,
      priority: "low",
    },
    {
      id: 5,
      text: "Task #5",
      start_date: "2024-08-24 10:30",
      duration: 3,
      progress: 0.4,
      priority: "low",
    },
    {
      id: 6,
      text: "Task #6",
      start_date: "2024-08-25 10:30",
      duration: 3,
      progress: 0.4,
      priority: "low",
    },
  ],
};

declare var gantt: GanttStatic;

const GanttChart = () => {
  const gantContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.config.server_utc = true;
    gantt.config.drag_resize = true;
    gantt.config.order_branch = true;
    gantt.config.columns = [
      { name: "text", tree: true, width: "*", min_width: 80, resize: true },
      { name: "start_date", width: 120, align: "center", resize: true },
      { name: "duration", align: "center", width: 80, resize: true },
      { name: "add", width: 60, resize: true },
    ];

    gantt.config.scales = [
      {
        unit: "week",
        step: 1,
        format: (date) => {
          const weekStart = gantt.date.week_start(date);
          const weekEnd = gantt.date.add(weekStart, 6, "day");
          const formatDate = gantt.date.date_to_str("%j %M");
          return `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
        },
      },
      {
        unit: "day",
        step: 1,
        format: "%j",
      },
    ];

    gantt.config.keep_grid_width = false;
    gantt.config.grid_resize = true;
    gantt.config.min_column_width = 50;
    gantt.config.scale_height = 60;

    gantt.config.start_date = new Date(new Date().getFullYear(), 1, 1);
    gantt.config.end_date = gantt.date.add(gantt.config.start_date, 1, "year");

    if (gantContainerRef.current) {
      gantt.init(gantContainerRef.current);
    }
  }, []);

  useEffect(() => {
    gantt.parse({
      data: data.data,
    });
    gantt.render();
  });

  return (
    <>
      <div
        id="root_contaier"
        style={{
          width: "100%",
          height: "calc(100% - 102px)",
          position: "absolute",
        }}
      >
        <div id="gantt" ref={gantContainerRef} />
      </div>
    </>
  );
};

export default GanttChart;
