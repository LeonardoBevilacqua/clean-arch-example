import { NotFoundError } from "../../../errors";
import { TodoRepositoryInterface } from "../../domain/ITodo.repository";
import { CreateTodoOutput } from "../../presentation";

export class GetTodoByIdUseCase {
    constructor(private todoRepo: TodoRepositoryInterface) { }

    async execute(id: number): Promise<CreateTodoOutput> {
        const todo = await this.todoRepo.findById(id);

        if (todo === undefined) {
            throw new NotFoundError(`Todo not found with id ${id}`);
        }

        return todo.toJSON();
    }
}