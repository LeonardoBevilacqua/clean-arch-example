import { NotFoundError } from "../../../core/errors";
import { HttpRequest } from "../../../core/presentation/contract";
import { HttpResponse } from "../../../core/presentation/contract/Response.http";
import { BaseControllerInterface } from "../../../core/use-case/IBase.controller";
import { ToggleReminderUseCase } from "./Toggle-reminder.use-case";

export class ToggleReminderController implements BaseControllerInterface {
    constructor(private toggleReminderUseCase: ToggleReminderUseCase) { }

    async handle(request: HttpRequest) {
        try {
            const output = await this.toggleReminderUseCase.execute(
                Number(request.params.id),
                JSON.parse(request.params.reminder)
            )
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