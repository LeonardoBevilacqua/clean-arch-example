import { HttpRequest, HttpResponse } from "../../../core/presentation/contract";
import { CreateTodoUseCase } from "./Create-todo.use-case";

export class CreateTodoController {
    constructor(private createUseCase: CreateTodoUseCase) {}

    async handle(request: HttpRequest) {
        const output = await this.createUseCase.execute(request.body);
        return HttpResponse.created(output);
    }
}