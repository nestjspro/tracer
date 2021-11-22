import * as uuid from 'uuid';

export class TraceSpan {

    public id: string;
    public start: number;
    public end: number;
    public messages: Array<any> = [];

    public constructor(span?: TraceSpan) {

        if (span) {

            this.id = span.id;
            this.start = span.start;
            this.end = span.end;
            this.messages = span.messages;

        } else {

            this.id = uuid.v4();

        }

    }

    public open(): void {

        this.start = Date.now();

    }

    public close(): void {

        this.end = Date.now();

    }

    public log(message: any): void {

        this.messages.push(message);

    }

}
