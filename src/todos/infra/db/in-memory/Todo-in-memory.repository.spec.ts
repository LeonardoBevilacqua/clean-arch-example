import { Todo, TodoProps } from "../../../domain/Todo.entity";
import { TodoInMemoryRepository } from "./Todo-in-memory.repository"

describe("TodoInMemoryRepository Test", () => {
    const repository = TodoInMemoryRepository.Instance;
    let todo: Todo;

    test("should insert a new todo", async () => {
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        todo = Todo.create(todoProps, 1);
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
        const output = await repository.findById(Number(todo.id));
        expect(output).toStrictEqual(todo);
    })

    test("should return undefined", async () => {
        const output = await repository.findById(0);
        expect(output).toStrictEqual(undefined);
    })

    test("should update a todo by id", async () => {
        const todoProps: TodoProps = {
            text: "new test",
            day: "Today",
            reminder: false
        };
        const updatedTodo = Todo.create(todoProps, 2);
        repository.items.push(updatedTodo);

        updatedTodo.updateText("updated test")
        await repository.update(updatedTodo);
        expect(repository.items).toHaveLength(2);
        expect(repository.items).toStrictEqual([todo, updatedTodo]);
        expect(repository.items[1].text).toStrictEqual("updated test");
    })

    test("should remove a todo by id", async () => {
        repository.items = [todo];
        await repository.delete(Number(todo.id));
        expect(repository.items).toHaveLength(0);
        expect(repository.items).toStrictEqual([]);
    })
})