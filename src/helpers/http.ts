import CustomError from "./CustomError";

export const fetchTodos = async ({ queryKey }: { queryKey: any }) => {
  const [, { completed, userId }] = queryKey;

  let url = "https://jsonplaceholder.typicode.com/todos?";

  if (completed !== "all") {
    url += `completed=${completed === "true" ? true : false}&`;
  }
  if (userId) {
    url += `userId=${userId}`;
  }

  const response = await fetch(url);
  const todos = await response.json();

  if (!response.ok) {
    throw new CustomError(
      "An error occurred while fetching the events",
      response.status
    );
  }
  return todos;
};
