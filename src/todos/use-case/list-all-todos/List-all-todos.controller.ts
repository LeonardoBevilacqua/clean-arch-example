import { HttpRequest } from "../../../core/presentation/contract";
import { HttpResponse } from "../../../core/presentation/contract/Response.http";
import { BaseControllerInterface } from "../../../core/use-case/IBase.controller";
import { ListAllTodosUseCase } from "./List-all-todos.use-case";

export class ListAllTodosController implements BaseControllerInterface {
    constructor(private listAllUseCase: ListAllTodosUseCase) {}

    async handle(_request: HttpRequest) {
        const output = await this.listAllUseCase.execute();
        return HttpResponse.ok(output);
    }
}