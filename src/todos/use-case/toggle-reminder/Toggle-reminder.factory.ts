import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository";
import { ToggleReminderController } from "./Toggle-reminder.controller";
import { ToggleReminderUseCase } from "./Toggle-reminder.use-case";

export const fabricateToggleReminderController = () => {
     // dependencies
     const todoRepo = TodoInMemoryRepository.Instance;
     // use case
     const toggleReminderUseCase = new ToggleReminderUseCase(todoRepo);

     return new ToggleReminderController(toggleReminderUseCase);
}