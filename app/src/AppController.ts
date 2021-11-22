import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { Tracer } from '../../lib/dist/Tracer';
import { Trace } from '../../lib/dist/Trace';
import { TracingInterceptor } from '../../lib/dist/TracingInterceptor';

@Controller('/')
@UseInterceptors(TracingInterceptor)
export class AppController {

    @Get('/test')
    public test(@Tracer() trace: Trace) {

        console.log(trace);

    }

}
