import * as uuid from 'uuid';
import { Response } from 'express';
import { TraceSpan } from './TraceSpan';

export class Trace {

    public id: string;
    public start: number;
    public end: number;
    public spans: Array<TraceSpan> = [];

    public constructor(trace?: Trace) {

        if (trace) {

            Object.assign(this, trace);

        } else {

            this.id = uuid.v4();
            this.start = Date.now();

        }

    }

    public close(): void {

        this.end = Date.now();

    }

    public getSpan(id: string): TraceSpan {

        return this.spans.find(span => span.id === id);

    }

    public startSpan(): TraceSpan {

        const span = new TraceSpan();

        this.spans.push(span);

        return span;

    }

    public endSpan(id: string): void {

        const span = this.getSpan(id);

        span.close();

    }

    public applyHeaders(response: Response): void {

        response.header('x-trace-id', this.id);
        response.header('x-trace-start', this.start.toString());
        response.header('x-trace-spans', this.spans.length);

        if (this.end) {

            response.header('x-trace-end', this.end.toString());
            response.header('x-trace-ms', (this.end - this.start).toString());

        }

    }

}
