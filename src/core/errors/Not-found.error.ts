export class NotFoundError extends Error {
    code = 404;
    constructor(message: string) {
        super(message);
        this.name = "NotFound";
    }
}
