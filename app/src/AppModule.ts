import { Module } from '@nestjs/common';
import { AppService } from './AppService';
import { TracerModule } from '../../lib/dist/TracerModule';
import { AppController } from './AppController';

@Module({

    imports: [

        TracerModule.forRoot({})

    ],

    controllers: [

        AppController

    ],

    providers: [

        AppService

    ]

})
export class AppModule {

}
