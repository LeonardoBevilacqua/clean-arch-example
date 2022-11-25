import { Todo, TodoProps } from "../../domain/Todo.entity";
import { TodoInMemoryRepository } from "./Todo-in-memory.repository"

describe("TodoInMemoryRepository Test", () => {
    const repository = new TodoInMemoryRepository();
    let todo: Todo;

    test("should insert a new todo", async () => {
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        todo = Todo.create(todoProps);
        await repository.insert(todo);
        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([todo]);
    })

    test("should return all todos", async () => {
        const output = await repository.findAll();
        expect(output).toHaveLength(1);
        expect(output).toStrictEqual([todo]);
    })

    test("should return a todo by id", async () => {
        const output = await repository.findById(todo.id);
        expect(output).toStrictEqual(todo);
    })

    test("should return undefined",async () => {
        const output = await repository.findById(0);
        expect(output).toStrictEqual(undefined);
    })
})