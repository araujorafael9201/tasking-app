import TaskType from "../ts/taskType";
import Task from "./Task";

interface TaskListProps {
  hooks: {
    tasks: TaskType[]
    filterOption: string
    removeTask: (id: number) => void
    editTask: (id: number, text: string) => void
    checkTask: (id: number) => void
  }
}

export default function TaskList({hooks: {tasks, filterOption, removeTask, editTask, checkTask}}: TaskListProps) {
  return <>
    <div 
      className="overflow-hidden border-black border w-72 h-72 rounded-2xl"
    >
      <ul 
        className="p-4 w-full h-full flex flex-col gap-1 overflow-x-hidden overflow-y-auto"
      >
        {tasks.map((task) =>{
          if (filterOption === "pending" && task.complete) return
          if (filterOption === "complete" && !task.complete) return

          return <>
            <Task
              id={task.id}
              text={task.text}
              complete={task.complete}
              hooks={{
                removeTask,
                editTask,
                checkTask,
              }}
            />  
          </>
        }
        )}
      </ul>
    </div>
  </>
}