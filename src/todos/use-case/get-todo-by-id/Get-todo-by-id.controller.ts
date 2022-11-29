import { NotFoundError } from "../../../core/errors";
import { HttpRequest } from "../../../core/presentation/contract";
import { HttpResponse } from "../../../core/presentation/contract/Response.http";
import { BaseControllerInterface } from "../../../core/use-case/IBase.controller";
import { GetTodoByIdUseCase } from "./Get-todo-by-id.use-case";

export class GetTodoByIdController implements BaseControllerInterface {
    constructor(private getByIdUseCase: GetTodoByIdUseCase) { }

    async handle(request: HttpRequest) {
        try {
            const output = await this.getByIdUseCase.execute(Number(request.params.id));
            return HttpResponse.ok(output);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return HttpResponse.notFound(error);
            } else {
                return HttpResponse.serverError(error);
            }
        }
    }
}