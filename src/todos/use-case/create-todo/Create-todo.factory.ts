import { SequelizeRepository } from "../../../core/infra/db/sequelize/Sequelize.repository";
import { TodoInMemoryRepository, TodoSequelizeRepository } from "../../infra/db";
import { CreateTodoController } from "./Create-todo.controller";
import { CreateTodoUseCase } from "./Create-todo.use-case";

export const fabricateCreateTodoController = async () => {
    // config
    const sequelizeConfig = new SequelizeRepository();
    await sequelizeConfig.load();
    // dependencies
     //const todoRepo = TodoInMemoryRepository.Instance;
    const todoRepo = new TodoSequelizeRepository();
    // use case
    const createUseCase = new CreateTodoUseCase(todoRepo);

    return new CreateTodoController(createUseCase);
}