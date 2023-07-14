import { NotFoundError } from "../../../core/errors";
import { Todo, TodoProps } from "../../domain/Todo.entity";
import { TodoInMemoryRepository } from "../../infra/db/in-memory/Todo-in-memory.repository"
import { ToggleReminderUseCase } from "./Toggle-reminder.use-case";

describe("ToggleReminder Tests", () => {
    test('Should update a todo reminder',async () => {
        const repository = TodoInMemoryRepository.Instance;
        const todoProps: TodoProps = {
            text: "test",
            day: "Today",
            reminder: false
        };
        const todo = Todo.create(todoProps);
        repository.items = [todo];

        const toggleReminderUseCase = new ToggleReminderUseCase(repository);
        const output = await toggleReminderUseCase.execute(todo.id, true);

        expect(repository.items).toHaveLength(1);
        expect(output).toStrictEqual({...todo.toJSON(), reminder: true});
        expect(output.reminder).toStrictEqual(true);
    })

    test('should throw an exception', async () => {
        const repository = TodoInMemoryRepository.Instance;
        const toggleReminderUseCase = new ToggleReminderUseCase(repository);
        await expect(toggleReminderUseCase.execute(1, true)).rejects.toThrow(NotFoundError);
    })
})