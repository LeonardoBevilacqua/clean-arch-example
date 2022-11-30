import { SequelizeRepository } from "../../../core/infra/db/sequelize/Sequelize.repository";
import { TodoSequelizeRepository } from "../../infra/db";
import { ToggleReminderController } from "./Toggle-reminder.controller";
import { ToggleReminderUseCase } from "./Toggle-reminder.use-case";

export const fabricateToggleReminderController = async () => {
     // config
    const sequelizeConfig = new SequelizeRepository();
    await sequelizeConfig.load();
    // dependencies
     //const todoRepo = TodoInMemoryRepository.Instance;
    const todoRepo = new TodoSequelizeRepository();
     // use case
     const toggleReminderUseCase = new ToggleReminderUseCase(todoRepo);

     return new ToggleReminderController(toggleReminderUseCase);
}