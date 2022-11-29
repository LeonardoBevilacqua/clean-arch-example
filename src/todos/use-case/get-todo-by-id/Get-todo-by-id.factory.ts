import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository";
import { GetTodoByIdController } from "./Get-todo-by-id.controller";
import { GetTodoByIdUseCase } from "./Get-todo-by-id.use-case";

export const fabricateGetTodoByIdController = () => {
     // dependencies
     const todoRepo = TodoInMemoryRepository.Instance;
     // use case
     const getByIdUseCase = new GetTodoByIdUseCase(todoRepo);

     return new GetTodoByIdController(getByIdUseCase);
}