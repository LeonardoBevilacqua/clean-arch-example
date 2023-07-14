import { sequelize, SequelizeRepository } from "../../../core/infra/db/sequelize/Sequelize.repository";
import { TodoSequelizeRepository } from "../../infra/db";
import { GetTodoByIdController } from "./Get-todo-by-id.controller";
import { GetTodoByIdUseCase } from "./Get-todo-by-id.use-case";

export const fabricateGetTodoByIdController = async () => {
     // config
    const sequelizeConfig = new SequelizeRepository();
    await sequelizeConfig.load();
    // dependencies
     //const todoRepo = TodoInMemoryRepository.Instance;
    const todoRepo = new TodoSequelizeRepository(sequelize);
     // use case
     const getByIdUseCase = new GetTodoByIdUseCase(todoRepo);

     return new GetTodoByIdController(getByIdUseCase);
}