import { Todo, TodoProps } from "../../domain/Todo.entity";
import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository"
import { DeleteTodoByIdUseCase } from "./Delete-todo-by-id.use-case";

describe('DeleteTodoByIdUseCase Tests', () => {

    it('should delete a todo by id', async () => {
        const repository = new TodoInMemoryRepository();
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        const todo = Todo.create(todoProps);
        repository.items = [todo];
        const deleteByIdUseCase = new DeleteTodoByIdUseCase(repository);
        const output = await deleteByIdUseCase.execute(todo.id);

        expect(repository.items).toHaveLength(0);
        expect(repository.items).toStrictEqual([]);
    })
})