import { Injectable } from '@nestjs/common';
import { TracerService } from '../../lib/dist/TracerService';

@Injectable()
export class AppService {

    public constructor(private readonly tracerService: TracerService) {

    }

}
