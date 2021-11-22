import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Trace } from './Trace';

/**
 * Custom decorator for retrieving a tracing session.
 *
 * @type {Trace} Tracing session instance.
 */
export const Tracer = createParamDecorator((data: string, context: ExecutionContext) => {

    return new Trace(context.switchToHttp().getRequest().trace);

});
