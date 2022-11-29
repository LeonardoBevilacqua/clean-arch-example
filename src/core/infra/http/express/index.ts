import express, { Express } from "express";
import { todoController } from "../../../../todos/infra/http/express/Todo.controller";

const app: Express = express();
app.use(express.json())
const port = process.env.PORT || 3000;

app.use('/todos', todoController)

app.listen(port, () => console.log(`Server running in port ${port}`));