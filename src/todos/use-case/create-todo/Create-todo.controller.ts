import { HttpRequest, HttpResponse } from "../../../core/presentation/contract";
import { BaseControllerInterface } from "../../../core/use-case/IBase.controller";
import { CreateTodoUseCase } from "./Create-todo.use-case";

export class CreateTodoController implements BaseControllerInterface {
    constructor(private createUseCase: CreateTodoUseCase) {}

    async handle(request: HttpRequest) {
        const output = await this.createUseCase.execute(request.body);
        return HttpResponse.created(output);
    }
}