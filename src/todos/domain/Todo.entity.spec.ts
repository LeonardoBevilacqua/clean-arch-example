import { Todo, TodoProps } from "./Todo.entity"

describe("Todo Tests", () => {
    test("constructor", () => {
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        let todo = Todo.create(todoProps);
        expect(todo.props).toStrictEqual({
            ...todoProps
        });
        expect(todo.id).toBeDefined();
    });

    test("empty constructor", () => {
        //@ts-expect-error testing orm constructor
        const todo = Todo.create(null);
        expect(todo.props).toStrictEqual({});
    })

    test("updateText method", () => {
        const todoProps: TodoProps = {
            text: "old value",
            day: "Today",
            reminder: false
        }
        let todo = Todo.create(todoProps);
        todo.updateText("new value");
        expect(todo.text).toBe("new value");
    });

    test("updateDay method", () => {
        const todoProps: TodoProps = {
            text: "text",
            day: "old value",
            reminder: false
        }
        let todo = Todo.create(todoProps);
        todo.updateDay("new value");
        expect(todo.day).toBe("new value");
    });

    test("updateReminder method", () => {
        const todoProps: TodoProps = {
            text: "text",
            day: "Today",
            reminder: false
        }
        let todo = Todo.create(todoProps);
        todo.updateReminder(true);
        expect(todo.reminder).toBe(true);
    });
})