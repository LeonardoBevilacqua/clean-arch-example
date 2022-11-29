import { HttpRequest, HttpResponse } from "../../../core/presentation/contract";
import { BaseControllerInterface } from "../../../core/use-case/IBase.controller";
import { DeleteTodoByIdUseCase } from "./Delete-todo-by-id.use-case";

export class DeleteTodoByIdController implements BaseControllerInterface {
    constructor(private deleteByIdUseCase: DeleteTodoByIdUseCase) {}

    async handle(request: HttpRequest) {
        await this.deleteByIdUseCase.execute(Number(request.params.id));
        return HttpResponse.noContent();
    }
}