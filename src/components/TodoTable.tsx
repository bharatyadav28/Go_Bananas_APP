import DataTable from "./DataTable";
import { Data, HeadCell } from "../helpers/interfaces";
import { incomingTodo } from "../helpers/interfaces";

interface propsTypes {
  todos: incomingTodo[] | [];
}

const TodoTable: React.FC<propsTypes> = ({ todos }) => {

  // tranform the incoming data to display in the table
  function createData(
    id: number,
    userId: number,
    title: string,
    completed: boolean
  ): Data {
    return {
      id,
      userId,
      title,
      completed: completed ? "true" : "false",
    };
  }

  // Row data for the table
  const rows = todos?.map((todo: any) => {
    const { id, userId, title, completed } = todo;
    return createData(id, userId, title, completed);
  });

  // Types and names of column
  const headCells: readonly HeadCell[] = [
    {
      id: "id",
      numeric: true,
      disablePadding: false,
      label: "id",
      flex: 1,
    },
    {
      id: "userId",
      numeric: true,
      disablePadding: false,
      label: "userId",
      flex: 1,
    },
    {
      id: "title",
      numeric: false,
      disablePadding: false,
      label: "title",
      flex: 0.1,
      minWidth: "2rem",
    },
    {
      id: "completed",
      numeric: false,
      disablePadding: false,
      label: "completed",
      flex: 1,
    },
  ];

  return <DataTable rows={rows} headCells={headCells} />;
 
};

export default TodoTable;
