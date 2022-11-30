// type, class, interface
export type TodoProps = {
    text: string;
    day: string;
    reminder: boolean;
}

export class Todo {
    public readonly id: number | null;
    public props: Required<TodoProps>

    private constructor(props: TodoProps, id?: number) {
        this.id = id || null;

        if (!props) {
            //@ts-expect-error used for ORM
            this.props = {};
            return;
        }

        this.props = { ...props };
    }

    static create(props: TodoProps, id?: number) {
        return new Todo(props, id);
    }

    updateText(text: string) {
        this.text = text;
    }

    updateDay(day: string) {
        this.day = day;
    }

    updateReminder(reminder: boolean) {
        this.reminder = reminder;
    }

    get text() {
        return this.props.text;
    }

    private set text(value: string) {
        this.props.text = value
    }

    get day() {
        return this.props.day;
    }

    private set day(value: string) {
        this.props.day = value
    }

    get reminder() {
        return this.props.reminder;
    }

    private set reminder(value: boolean) {
        this.props.reminder = value
    }

    toJSON() {
        return {
            id: this.id,
            ...this.props,
        };
    }
}