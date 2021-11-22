import { Inject, Injectable } from '@nestjs/common';
import { TracerConfig } from './TracerConfig';
import { Trace } from './Trace';

@Injectable()
export class TracerService {

    private readonly config: TracerConfig;
    private readonly traces: Array<Trace> = [];
    private readonly current: Trace;

    public constructor(@Inject('TRACER_CONFIG') config: TracerConfig) {

        this.config = config;

    }

    public start(): Trace {

        const trace = new Trace();
        
        this.traces.push(trace);

        return trace;

    }

    public getCurrent(): Trace {

        return this.current;

    }

}
