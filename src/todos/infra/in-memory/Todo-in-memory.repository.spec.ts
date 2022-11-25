import { Todo, TodoProps } from "../../domain/Todo.entity";
import { TodoInMemoryRepository } from "./Todo-in-memory.repository"

describe("TodoInMemoryRepository Test", () => {
    it("should insert a new todo", async () => {
        const repository = new TodoInMemoryRepository();
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        const todo = Todo.create(todoProps);
        await repository.insert(todo);
        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([todo]);
    })
})