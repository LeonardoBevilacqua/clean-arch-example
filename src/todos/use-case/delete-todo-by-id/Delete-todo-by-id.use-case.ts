import { TodoRepositoryInterface } from "../../domain/ITodo.repository";
import { Todo } from "../../domain/Todo.entity";
import { CreateTodoInput, CreateTodoOutput } from "../../presentation";

export class DeleteTodoByIdUseCase {
    constructor(private todoRepo: TodoRepositoryInterface) { }

    async execute(id: number): Promise<void> {
        await this.todoRepo.delete(id);
    }
}