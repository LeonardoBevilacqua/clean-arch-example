import { NotFoundError } from "../../../core/errors";
import { Todo, TodoProps } from "../../domain/Todo.entity";
import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository";
import { GetTodoByIdUseCase } from "./Get-todo-by-id.use-case";

describe('GetTodoByIdUseCase Tests', () => {

    test('should get a todo by id', async () => {
        const repository = TodoInMemoryRepository.Instance;
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        const todo = Todo.create(todoProps);
        repository.items = [todo];

        const getByIdUseCase = new GetTodoByIdUseCase(repository);
        const output = await getByIdUseCase.execute(todo.id);
        expect(output.id).toStrictEqual(todo.id);
        expect(output).toStrictEqual(todo.toJSON());
    });

    test('should throw an exception', async () => {
        const repository = TodoInMemoryRepository.Instance;
        const getByIdUseCase = new GetTodoByIdUseCase(repository);
        await expect(getByIdUseCase.execute(1)).rejects.toThrow(NotFoundError);
    })
})