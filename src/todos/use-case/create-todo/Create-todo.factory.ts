import { TodoInMemoryRepository } from "../../infra/db/in-memory/Todo-in-memory.repository";
import { CreateTodoController } from "./Create-todo.controller";
import { CreateTodoUseCase } from "./Create-todo.use-case";

export const fabricateCreateTodoController = () => {
    // dependencies
    const todoRepo = TodoInMemoryRepository.Instance;
    // use case
    const createUseCase = new CreateTodoUseCase(todoRepo);

    return new CreateTodoController(createUseCase);
}