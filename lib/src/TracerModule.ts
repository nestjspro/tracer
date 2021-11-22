import { Module, DynamicModule } from '@nestjs/common';
import { TracerConfig } from './TracerConfig';
import { TracerService } from './TracerService';

@Module({})
export class TracerModule {

    public static forRoot(config: TracerConfig): DynamicModule {

        return {

            module: TracerModule,

            providers: [

                TracerService,
                {

                    provide: 'TRACER_CONFIG',
                    useValue: config

                }

            ],

            exports: [

                TracerService

            ]

        };

    }

}
