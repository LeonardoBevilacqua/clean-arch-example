import { NotFoundError } from "../../../errors";
import { TodoRepositoryInterface } from "../../domain/ITodo.repository";
import { CreateTodoOutput } from "../../presentation";

export class ToggleReminderUseCase {
    constructor(private todoRepo: TodoRepositoryInterface) { }

    async execute(id: number, reminder: boolean): Promise<CreateTodoOutput> {
        const todo = await this.todoRepo.findById(id);

        if (todo === undefined) {
            throw new NotFoundError(`Todo not found with id ${id}`);
        }
        todo.updateReminder(reminder);
        await this.todoRepo.update(todo);

        return todo.toJSON();
    }
}