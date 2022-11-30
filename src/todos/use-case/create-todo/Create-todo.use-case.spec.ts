import { Sequelize } from "sequelize";
import { TodoSequelizeRepository } from "../../infra/db";
import { TodoInMemoryRepository } from "../../infra/db/in-memory/Todo-in-memory.repository";
import { CreateTodoUseCase } from "./Create-todo.use-case";

describe('CreateTodoUseCase Tests', () => {
    const sequelize = new Sequelize('sqlite::memory:');
    const todoSequelizeRepository = new TodoSequelizeRepository(sequelize);

    beforeAll(async () => await sequelize.sync());

    it('should create a new todo for in memory repository', async () => {
        const repository = TodoInMemoryRepository.Instance;
        const createUseCase = new CreateTodoUseCase(repository);
        const output = await createUseCase.execute({
            text: "test",
            day: "Today",
            reminder: false
        });

        expect(repository.items).toHaveLength(1);
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            text: "test",
            day: "Today",
            reminder: false
        });
    })

    it('should create a new todo for in sequelize repository', async () => {
        const createUseCase = new CreateTodoUseCase(todoSequelizeRepository);
        const output = await createUseCase.execute({
            text: "test",
            day: "Today",
            reminder: false
        });

        expect(output.text).toStrictEqual("test");
        expect(output.day).toStrictEqual("Today");
        expect(output.reminder).toStrictEqual(false);
    })
})