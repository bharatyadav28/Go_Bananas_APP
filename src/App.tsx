import * as React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Header from "./components/Header";
import TodoTable from "./components/TodoTable";
import { fetchTodos } from "./helpers/http";
import FilterById from "./components/FilterByID";
import FilterByStatus from "./components/FilterByStatus";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const [completed, setCompleted] = React.useState<string>("all");
  const [userId, setUserId] = React.useState<string>("");

  // Fetching data using react query
  const { isPending, data } = useQuery({
    queryKey: ["todos", { completed, userId }],
    queryFn: fetchTodos,
  });

  const handleUserIdChange = (value: string) => {
    setUserId(value);
  };

  const handleChange = (value: string) => {
    setCompleted(value);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
      className="w-full flex flex-col items-center sm:w-full "
    >
      <Box className="my-5 ">
        <Header />
      </Box>

      <Box className="flex flex-col sm:w-full  md:max-w-[50rem] ">
        <Box className="flex justify-end gap-2 mb-2">
          <FilterById userId={userId} onUserIdChange={handleUserIdChange} />
          <FilterByStatus completed={completed} onStatusChange={handleChange} />
        </Box>

        {data && !isPending && <TodoTable todos={data} />}
        {isPending && (
          <Box className="flex justify-center h-48 items-center">
            <LoadingSpinner />
          </Box>
        )}
      </Box>
    </Box>
  );
}
