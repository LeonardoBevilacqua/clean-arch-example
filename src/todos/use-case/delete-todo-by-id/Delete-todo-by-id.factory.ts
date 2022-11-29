import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository";
import { DeleteTodoByIdController } from "./Delete-todo-by-id.controller";
import { DeleteTodoByIdUseCase } from "./Delete-todo-by-id.use-case";

export const fabricateDeleteTodoByIdController = () => {
    // dependencies
    const todoRepo = TodoInMemoryRepository.Instance;
    // use case
    const deleteByIdUseCase = new DeleteTodoByIdUseCase(todoRepo);

    return new DeleteTodoByIdController(deleteByIdUseCase);
}