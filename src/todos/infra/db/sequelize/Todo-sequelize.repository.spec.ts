import { Sequelize } from "sequelize";
import { Todo, TodoProps } from "../../../domain/Todo.entity";
import { TodoSequelizeRepository } from "./Todo-sequelize.repository";

describe("TodoSequelizeRepository Test", () => {
    const sequelize = new Sequelize('sqlite::memory:');
    const repository = new TodoSequelizeRepository(sequelize);
    let todo: Todo;

    beforeEach(async () => await sequelize.sync());

    test("should insert a new todo", async () => {
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        todo = Todo.create(todoProps, 1);
        const result = await repository.insert(todo);
        expect(result.text).toStrictEqual(todo.text);
        expect(result.day).toStrictEqual(todo.day);
        expect(result.reminder).toStrictEqual(todo.reminder);
    })

    test("should return all todos", async () => {
        const output = await repository.findAll();
        expect(output).toHaveLength(1);
        expect(output[0].text).toStrictEqual(todo.text);
        expect(output[0].day).toStrictEqual(todo.day);
        expect(output[0].reminder).toStrictEqual(todo.reminder);
    })

    test("should return a todo by id", async () => {
        const output = await repository.findById(Number(todo.id));
        expect(output).toBeDefined();
        expect(output?.text).toStrictEqual(todo.text);
        expect(output?.day).toStrictEqual(todo.day);
        expect(output?.reminder).toStrictEqual(todo.reminder);
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

        updatedTodo.updateText("updated test")
        await repository.update(updatedTodo);
    })

    test("should remove a todo by id", async () => {
        await repository.delete(Number(todo.id));
    })
})