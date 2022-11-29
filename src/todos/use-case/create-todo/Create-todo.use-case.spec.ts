import { TodoInMemoryRepository } from "../../infra/in-memory/Todo-in-memory.repository"
import { CreateTodoUseCase } from "./Create-todo.use-case";

describe('CreateTodoUseCase Tests', () => {

    it('should create a new todo', async () => {
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
})