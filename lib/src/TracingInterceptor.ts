import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request, Response } from 'express';
import { Trace } from './Trace';

export interface Res<T> {
    data: T;
}

export class TracingInterceptor implements NestInterceptor {

    public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        const trace = new Trace();

        const request: Request = context.switchToHttp().getRequest<Request>();
        // eslint-disable-next-line no-undef

        request[ 'trace' ] = trace;
        //

        return next.handle().pipe(tap({

            next: () => {

                trace.close();

                trace.applyHeaders(context.switchToHttp().getResponse<Response>());
                // const end = Date.now();
                //
                // response.headers[ 'x-trace-id' ] = trace.id;
                // response.headers[ 'x-trace-start' ] = start;
                // response.headers[ 'x-trace-end' ] = end;
                // response.headers[ 'x-trace-ms' ] = end - start;

                console.log(2);
                // return { asdf: 123213 };

            },

            error: () => {

                trace.close();

                trace.applyHeaders(context.switchToHttp().getResponse<Response>());


            }
        }));

    }

}
