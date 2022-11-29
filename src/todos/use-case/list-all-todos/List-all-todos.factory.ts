import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository";
import { ListAllTodosController } from "./List-all-todos.controller";
import { ListAllTodosUseCase } from "./List-all-todos.use-case";

export const fabricateListAllTodosController = () => {
     // dependencies
     const todoRepo = TodoInMemoryRepository.Instance;
     // use case
     const listAllUseCase = new ListAllTodosUseCase(todoRepo);

     return new ListAllTodosController(listAllUseCase);
}