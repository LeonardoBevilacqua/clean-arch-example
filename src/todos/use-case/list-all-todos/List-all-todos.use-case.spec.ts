import { Todo, TodoProps } from "../../domain/Todo.entity";
import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository";
import { ListAllTodosUseCase } from "./List-all-todos.use-case";

describe('ListAllTodosUseCase Tests', () => {

    it('should list all todos', async () => {
        const repository = TodoInMemoryRepository.Instance;
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        const todo = Todo.create(todoProps);
        repository.items = [todo];

        const listAllUseCase = new ListAllTodosUseCase(repository);
        const output = await listAllUseCase.execute();
        expect(output).toHaveLength(1);
        expect(output).toStrictEqual([todo.toJSON()]);
    });
})